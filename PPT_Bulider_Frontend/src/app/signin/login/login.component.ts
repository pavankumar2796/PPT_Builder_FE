import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ForgetpswdComponent } from '../forgetpswd/forgetpswd.component';
import { AuthService } from 'src/app/services/Authorize/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  onLogin(loginForm: any) {
    if (loginForm.valid) {
      const credentials = {
        userEmail: loginForm.value.email,
        password: loginForm.value.password
      };

      this.authService.login(credentials).subscribe(
        response => {
          this.router.navigate(['/split']);
        },
        error => {
          console.error('Login failed:', error);
        }
      );
    }
  }

  openForgotPasswordDialog(email: string): void {
    const dialogRef = this.dialog.open(ForgetpswdComponent, {
      width: '300px',
      data: { email }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
