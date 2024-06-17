import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://10.0.0.163:8082/api/AuthManagement';

  constructor(private http: HttpClient) { }

  sendOtp(email: string): Observable<any> {
    const url = `${this.apiUrl}/VerifyEmail?email=${email}`;
    return this.http.post<any>(url, {});
  }

  verifyOtp(data: any): Observable<any> {
    const url = `${this.apiUrl}/VerifyOTP?otp=${data.otp}&email=${data.email}`;
    return this.http.post<any>(url, null, { observe: 'response' });
  }

  signUp(userData: any): Observable<any> {
    const url = `${this.apiUrl}/Create-User`;
    return this.http.post<any>(url, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Sign-In`, credentials);
  }

}
