import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emailotpverification',
  templateUrl: './emailotpverification.component.html',
  styleUrls: ['./emailotpverification.component.css']
})
export class EmailotpverificationComponent {

  otp: string = '';
  timer: number = 60;
  timerInterval: any;

  constructor(public dialogRef: MatDialogRef<EmailotpverificationComponent>, private router: Router) { }

  verifyOTP() {
    // Add logic to verify OTP
    // You can communicate back to the parent component using the dialogRef
    this.router.navigate(['/login']);
    this.dialogRef.close({ action: 'verify', otp: this.otp });
  }

  resendOTP() {
    // Add logic to resend OTP
    // You can communicate back to the parent component using the dialogRef
    this.dialogRef.close({ action: 'resend' });
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

}
