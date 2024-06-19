import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ResetpswdComponent } from '../resetpswd/resetpswd.component';

@Component({
  selector: 'app-otpverifypswd',
  templateUrl: './otpverifypswd.component.html',
  styleUrls: ['./otpverifypswd.component.css']
})
export class OtpverifypswdComponent implements OnInit {

  otp: BigInt = BigInt(0);
  timer: number = 60;
  timerInterval: any;
 
  constructor(
    private router: Router,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<OtpverifypswdComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
 
  ngOnInit(): void {
    this.startTimer();
  }
 
  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
 
  verifypswdOTP() {
    this.dialogRef.close({ action: 'verify', otp: this.otp });

    // Open reset confirmation dialog
    const dialogRef = this.dialog.open(ResetpswdComponent, {
      width: '400px',
      disableClose: true,
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) { // result will be true if user clicks 'Yes, Reset'
    //     this.router.navigate(['/reset']);
    //   }
    // });
  }
 
  resendOTP() {
    this.resetTimer();
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
 
  resetTimer() {
    this.timer = 60;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.startTimer();
  }
 

}
