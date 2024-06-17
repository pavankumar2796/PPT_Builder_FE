import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/authorize/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otpforemail',
  templateUrl: './otpforemail.component.html',
  styleUrls: ['./otpforemail.component.css']
})
export class OtpforemailComponent {

  otp: string = '';

  constructor(
    public dialogRef: MatDialogRef<OtpforemailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { email: string },
    private authService: AuthService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  verifyOtp() {
    const verifyData = {
      email: this.data.email,
      otp: this.otp
    };
    this.authService.verifyOtp(verifyData).subscribe(
      response => {
        if (response.status === 200) {
          alert('OTP verified successfully');
          this.dialogRef.close(true); // Set the result to true on successful verification
        } else {
          alert('OTP verification failed');
        }
      },
      error => {
        console.error('Error verifying OTP', error);
        alert('OTP verification failed');
      }
    );
  }
}
