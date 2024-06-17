import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/authorize/auth.service';
import { OtpforemailComponent } from '../otpforemail/otpforemail.component';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent {

  email: string = '';

  constructor(public dialog: MatDialog, private authService: AuthService) {}

  sendOTP() {
    this.authService.sendOtp(this.email).subscribe(
      response => {
        alert('OTP sent to ' + this.email);
        this.openOtpDialog();
      },
      error => {
        console.error('Error sending OTP', error);
      }
    );
  }

  openOtpDialog(): void {
    const dialogRef = this.dialog.open(OtpforemailComponent, {
      width: '300px',
      data: { email: this.email }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

