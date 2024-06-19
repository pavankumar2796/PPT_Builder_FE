import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authorize/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ForgetpaswdComponent } from '../forgetpaswd/forgetpaswd.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router, public dialog: MatDialog) {}

  onLogin(form: NgForm): void {
    if (form.valid) {
      const { email, password } = form.value;
      if (!email.match(/.+@ecanarys\.com$/)) {
        this.errorMessage = 'Please enter a valid email address from ecanarys.com domain.';
        return;
      }
      this.authService.login({ userEmail: email, password }).subscribe(
        (response: any) => {
          if (response.data) {
            localStorage.setItem('authToken', response.data);
            console.log('AuthToken:', response.data);
            this.router.navigate(['/split']);
          } else {
            this.errorMessage = 'Email not registered. Please sign up.';
          }
        },
        error => {
          console.error('Error during login', error);
          this.errorMessage = 'Login failed. Please check your email and password.';
        }
      );
    } else {
      this.errorMessage = 'Please enter a valid email address and password.';
    }
  }

  openForgotPasswordDialog(email: string): void {
    const dialogRef = this.dialog.open(ForgetpaswdComponent, {
      width: '400px',
      data: { email }
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getLoginEmailErrorMessage(form: NgForm): string {
    const emailControl = form.controls['email'];
    if (emailControl.errors?.['required']) {
      return 'Email is required.';
    } else if (emailControl.errors?.['pattern']) {
      return 'Email must be in the format ...@ecanarys.com.';
    } else {
      return 'Invalid email address.';
    }
  }

}
