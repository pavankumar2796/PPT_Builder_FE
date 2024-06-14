import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/Authorize/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { 
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      if (this.signUpForm.value.password !== this.signUpForm.value.confirmPassword) {
        this.errorMessage = "Password and Confirm Password must match";
        return;
      }

      this.authService.signUp({
        firstName: this.signUpForm.value.firstName,
        lastName: this.signUpForm.value.lastName,
        userEMailId: this.signUpForm.value.email,
        password: this.signUpForm.value.password
      }).subscribe(
        response => {
          console.log('Sign up successful:', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Sign up failed:', error);
          this.errorMessage = error.message;
        }
      );
    } else {
      this.errorMessage = "Please fill in all required fields.";
    }
  }

}
