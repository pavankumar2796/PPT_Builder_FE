import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForgetpswdComponent } from '../forgetpswd/forgetpswd.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public dialog: MatDialog) { }

  openForgotPasswordDialog(): void {
    const dialogRef = this.dialog.open(ForgetpswdComponent, {
      width: '300px' // Adjust width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
