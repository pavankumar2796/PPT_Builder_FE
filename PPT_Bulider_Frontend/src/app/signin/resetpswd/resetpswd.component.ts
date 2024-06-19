import { Component, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/authorize/auth.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-resetpswd',
  templateUrl: './resetpswd.component.html',
  styleUrls: ['./resetpswd.component.css']
})
export class ResetpswdComponent {
 
  newPassword: string = '';
  confirmPassword: string = '';
  email: string = ''; 

  constructor(
    public dialogRef: MatDialogRef<ResetpswdComponent>,
    private authService: AuthService,
    private router: Router
  ) { }

  changePassword() {
    if (this.newPassword === this.confirmPassword) {
 
      this.authService.resetPassword(this.email, this.newPassword).subscribe(
        response => {
          console.log('Password reset successful');
         
          this.router.navigate(['/login']);
          this.dialogRef.close();
        },
        error => {
          console.error('Error resetting password:', error);
        
        }
      );
    } else {
      console.error('Passwords do not match');
    }
  }

 
}