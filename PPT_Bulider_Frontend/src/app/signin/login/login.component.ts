import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authorize/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(form: NgForm): void {
    const { email, password } = form.value;
    this.authService.login({ userEmail: email, password }).subscribe(
      (response: any) => { // Ensure response type matches the structure you're receiving
        localStorage.setItem('authToken', response.data); // Store the token
        this.router.navigate(['/split']);
      },
      error => {
        console.error('Login failed', error);
        alert('Login failed');
      }
    );
  }
  

}
