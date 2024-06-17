import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/authorize/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const userData = {
        firstName: this.signUpForm.value.firstName,
        lastName: this.signUpForm.value.lastName,
        userEMailId: this.signUpForm.value.email,
        password: this.signUpForm.value.password
      };

      this.authService.signUp(userData).subscribe(
        response => {
          alert('Signup successful. Redirecting to login page.');
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error during signup', error);
        }
      );
    }
  }
}
