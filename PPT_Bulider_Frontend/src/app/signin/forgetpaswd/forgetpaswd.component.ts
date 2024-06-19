import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/authorize/auth.service';
import { OtpverifypswdComponent } from '../otpverifypswd/otpverifypswd.component';

export interface DialogData {
  email: string;
}

@Component({
  selector: 'app-forgetpaswd',
  templateUrl: './forgetpaswd.component.html',
  styleUrls: ['./forgetpaswd.component.css']
})
export class ForgetpaswdComponent {

  email: string = '';
  errorMessage: string = '';
  isEmailVerified: boolean = false;
 
  constructor(
    public dialogRef: MatDialogRef<ForgetpaswdComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private authService: AuthService,
    public dialog: MatDialog
  ) {
    this.email = data.email;
  }

  frgtOTP(): void {
    this.authService.sendOtp(this.email).subscribe(
      response => {
        alert('OTP sent to ' + this.email);
        this.openOtpDialog(this.email);
      },
      (error: any) => {
        console.error('Error sending OTP', error);
        this.errorMessage = 'Error sending OTP. Please try again.';
      }
    );
  }

  openOtpDialog(email: string): void {
    const dialogRef = this.dialog.open(OtpverifypswdComponent, {
      width: '400px',
      data: { email }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.isEmailVerified = true;
        // Enable other form controls if needed
      }
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
 
}
