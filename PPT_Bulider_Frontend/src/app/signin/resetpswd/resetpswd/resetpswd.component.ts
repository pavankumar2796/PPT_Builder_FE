import { Component, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/Authorize/auth.service';

@Component({
  selector: 'app-resetpswd',
  templateUrl: './resetpswd.component.html',
  styleUrls: ['./resetpswd.component.css']
})
export class ResetpswdComponent {


  newPassword: string = '';
  confirmPassword: string = '';

  constructor(
    public dialogRef: MatDialogRef<ResetpswdComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService
  ) {}

  changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    this.authService.resetPassword(this.data.email, this.newPassword).subscribe(
      response => {
        console.log('Password reset successful:', response);
        this.dialogRef.close();
      },
      error => {
        console.error('Password reset failed:', error);
      }
    );
  }

}
