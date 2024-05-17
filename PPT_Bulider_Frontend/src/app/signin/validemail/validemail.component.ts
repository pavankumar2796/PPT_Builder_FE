import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmailotpverificationComponent } from '../emailotpverification/emailotpverification.component';

@Component({
  selector: 'app-validemail',
  templateUrl: './validemail.component.html',
  styleUrls: ['./validemail.component.css']
})
export class ValidemailComponent {

  constructor(public dialog: MatDialog) {}

  openOTPDialog() {
    const dialogRef = this.dialog.open(EmailotpverificationComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.action === 'verify') {
        // Handle verification logic here
        console.log('Verifying OTP:', result.otp);
      } else if (result && result.action === 'resend') {
        // Handle resend logic here
        console.log('Resending OTP');
      }
    });
  }

}
