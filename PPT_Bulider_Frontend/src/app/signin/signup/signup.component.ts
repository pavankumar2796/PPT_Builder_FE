import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl  } from '@angular/forms';
import { AuthService } from 'src/app/services/authorize/auth.service';
import { Router } from '@angular/router';
import { OtpforemailComponent } from '../otpforemail/otpforemail.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup;
  isEmailVerified: boolean = false;
  errorMessage: string = '';

  emailPattern = '\\b[A-Za-z0-9._%+-]+@ecanarys\\.com\\b';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: [{ value: '', disabled: true }, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [{ value: '', disabled: true }, Validators.required]
    });
  }

  sendOTP(): void {
    const emailControl = this.signUpForm.get('email');
    if (emailControl && emailControl.valid) {
      const email = emailControl.value;
      this.authService.sendOtp(email).subscribe(
        response => {
          alert('OTP sent to ' + email);
          this.openOtpDialog(email);
        },
        error => {
          console.error('Error sending OTP', error);
          alert('Error sending OTP. Please try again.');
        }
      );
    } else {
      alert('Please enter a valid email address.');
    }
  }

  openOtpDialog(email: string): void {
    const dialogRef = this.dialog.open(OtpforemailComponent, {
      width: '300px',
      data: { email }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.isEmailVerified = true;
        this.signUpForm.get('password')?.enable();
        this.signUpForm.get('confirmPassword')?.enable();
      }
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid && this.isEmailVerified) {
      const signUpData = this.signUpForm.value;
      delete signUpData.confirmPassword; // Remove confirmPassword field from data
      this.authService.signUp(signUpData).subscribe(
        (response: any) => {
          alert('Sign up successful!');
          this.router.navigate(['/login']);
        },
        (error: any) => {
          console.error('Sign up error', error);
          alert('Sign up failed. Please try again.');
        }
      );
    } else {
      alert('Form is invalid. Please check the inputs.');
    }
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }
  
}
