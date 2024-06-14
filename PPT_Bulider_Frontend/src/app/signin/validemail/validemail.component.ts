import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmailotpverificationComponent } from '../emailotpverification/emailotpverification.component';
import { AuthService } from 'src/app/services/Authorize/auth.service';

@Component({
  selector: 'app-validemail',
  templateUrl: './validemail.component.html',
  styleUrls: ['./validemail.component.css']
})
export class ValidemailComponent {

  email: string = '';


  constructor(public dialog: MatDialog, private authService: AuthService) {}

  openOTPDialog() {
    this.sendOTP();
  }

  sendOTP() {
    if ((this.email!=null)) {
      this.authService.sendOtp(this.email).subscribe((data: any) => {
        console.log(data, 'resp');
          this.openVerificationDialog();
        },
        error => {
          console.error('Failed to send OTP:', error);
        }
      );
    } else {
      console.error('Invalid email address');
    }
  }

  openVerificationDialog() {
    const dialogRef = this.dialog.open(EmailotpverificationComponent, {
      width: '300px',
      data: { email: this.email } 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.action === 'verify') {
        this.verifyOTP(result.otp);
      } else if (result && result.action === 'resend') {
        this.resendOTP();
      }
    });
  }

  verifyOTP(otp: string) {
    const data = {
      email: this.email,
      otp: otp
    };
    
    this.authService.verifyOtp(data).subscribe(
      verifyResponse => {
        console.log('OTP Verified:', verifyResponse);
      },
      error => {
        console.error('Verification failed:', error);
      }
    );
  }
  

  resendOTP() {
    this.authService.sendOtp(this.email).subscribe(
      resendResponse => {
        console.log('OTP Resent:', resendResponse);
      },
      error => {
        console.error('Resend failed:', error);
        alert('Resend failed: ' + error.message);
      }
    );
  }

  // isEmailValid(email: string): boolean {
  //   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  //   return emailPattern.test(email);
  // }

}
