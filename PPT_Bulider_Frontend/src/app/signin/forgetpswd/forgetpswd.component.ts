import { Component, Inject  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/Authorize/auth.service';
import { EmailotpverificationComponent } from '../emailotpverification/emailotpverification.component';
import { ResetpswdComponent } from '../resetpswd/resetpswd/resetpswd.component';

export interface DialogData {
  email: string;
}

@Component({
  selector: 'app-forgetpswd',
  templateUrl: './forgetpswd.component.html',
  styleUrls: ['./forgetpswd.component.css']
})
export class ForgetpswdComponent {

  email: string = '';

  constructor(
    public dialogRef: MatDialogRef<ForgetpswdComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private authService: AuthService,
    public dialog: MatDialog
  ) {
    this.email = data.email;
  }

  sendResetPasswordEmail() {
    this.authService.sendResetPasswordEmail(this.email).subscribe(
      response => {
        console.log('Reset password email sent:', response);
        this.dialogRef.close();
        this.openOtpDialog();
      },
      error => {
        console.error('Error sending reset password email:', error);
      }
    );
  }

  openOtpDialog(): void {
    const dialogRef = this.dialog.open(EmailotpverificationComponent, {
      width: '300px',
      data: { email: this.email, context: 'reset' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.action === 'verify') {
        this.openResetPasswordDialog();
      }
    });
  }

  openResetPasswordDialog(): void {
    this.dialog.open(ResetpswdComponent, {
      width: '300px',
      data: { email: this.email }
    });
  }

}
