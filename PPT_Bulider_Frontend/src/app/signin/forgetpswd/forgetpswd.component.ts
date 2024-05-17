import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-forgetpswd',
  templateUrl: './forgetpswd.component.html',
  styleUrls: ['./forgetpswd.component.css']
})
export class ForgetpswdComponent {

  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(public dialogRef: MatDialogRef<ForgetpswdComponent>) { }

  changePassword(): void {
    // Add logic to change password
    this.dialogRef.close();
  }

}
