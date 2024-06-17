import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SplitResponse } from 'src/app/components/split/split.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private baseUrl = 'http://10.0.0.163:8081';

  constructor(private http: HttpClient) {}

  splitFile(file: File): Observable<SplitResponse> {
    const formData = new FormData();
    formData.append('file', file);

    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      throw new Error('No JWT token available');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.http.post<SplitResponse>(`${this.baseUrl}/syncFusion-Split`, formData, { headers });
  }

  saveMetadata(metadata: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      throw new Error('No JWT token available');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.http.post<any>(`${this.baseUrl}/insert-MetaData`, metadata, { headers });
  }

  getCarouselItems(): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      throw new Error('No JWT token available');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.http.post<any>(`${this.baseUrl}/syncFusion-Split`, {}, { headers });
  }
  
}
