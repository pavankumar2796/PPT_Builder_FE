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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  verifyOTP(): void {
    const verifyData = { email: this.data.email, otp: this.otp };
    this.authService.verifyOtp(verifyData).subscribe(
      response => {
        alert('OTP verified successfully');
        this.dialogRef.close();
        this.router.navigate(['/signup']);
      },
      error => {
        if (error.status === 409) { // Assuming 409 conflict status for already signed up users
          alert('User already signed up. Redirecting to login page.');
          this.dialogRef.close();
          this.router.navigate(['/login']);
        } else {
          console.error('Error verifying OTP', error);
        }
      }
    );
  }
}
