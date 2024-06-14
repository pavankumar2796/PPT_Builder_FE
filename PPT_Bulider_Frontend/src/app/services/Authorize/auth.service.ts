import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://10.0.0.163:8081'; 

  constructor(private http: HttpClient) { }

  sendOtp(data:any) {
     const url = 'http://10.0.0.163:8081/api/AuthManagement/VerifyEmail';
     return this.http.post<any>(url + `?email=${data}`,{ observe:'response'});
  }

  verifyOtp(data: any) {
    const url = `http://10.0.0.163:8081/api/AuthManagement/VerifyOTP?otp=${data.otp}&email=${data.email}`;
    return this.http.post<any>(url, null, { observe: 'response' });
  }
  

  signUp(userData: any): Observable<any> {
    const url = 'http://10.0.0.163:8081/api/AuthManagement/Create-User';
    return this.http.post<any>(url, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/AuthManagement/Sign-In`, credentials);
  }

  sendResetPasswordEmail(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/AuthManagement/ForgotPassword'`, { email });
  }

  resetPassword(email: string, newPassword: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/AuthManagement/ResetPassword'`, { email, newPassword });
  }
}
