import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable, throwError } from 'rxjs';
import { tap, catchError, map  } from 'rxjs/operators';

export interface MetaData {
  id: number;
  locationOfFile: string;
  fileName: string;
  metaDataOfSlide: string;
  keyWords: string;
  notes: string;
  userId: string;
  usersData: any;
}

export interface SplitResponse {
  numSlides: number;
  slideList: string[];
  metaData: MetaData[];
}

export interface GetAllSlidesResponse {
  statuscode: number;
  success: boolean;
  data: {
    objectUrl: string[];
    metaData: MetaData[];
  };
  message: string | null;
}


@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private baseUrl = 'http://10.0.0.163:8082';
  private splitResponseSubject = new BehaviorSubject<SplitResponse | null>(null);

  constructor(private http: HttpClient) {}

  splitFile(file: File): Observable<SplitResponse> {
    const formData = new FormData();
    formData.append('file', file);

    const headers = this.getHeaders();

    return this.http.post<SplitResponse>(`${this.baseUrl}/syncFusion-Split`, formData, { headers }).pipe(
      tap(response => this.splitResponseSubject.next(response)),
      catchError(this.handleError)
    );
  }

  getSplitResponse(): Observable<SplitResponse | null> {
    return this.splitResponseSubject.asObservable();
  }

  clearSplitResponse(): void {
    this.splitResponseSubject.next(null);
  }

  saveMetadata(metadata: any): Observable<any> {
    const headers = this.getHeaders();

    const body = {
      id: metadata.id,
      metaDataOfSlide: metadata.metaDataOfSlide,
      keyWords: metadata.keyWords,
      notes: metadata.notes
    };

    return this.http.post<any>(`${this.baseUrl}/insert-MetaData`, body, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  getAllSlideUrls(): Observable<GetAllSlidesResponse> {
    const headers = this.getHeaders();

    return this.http.get<GetAllSlidesResponse>(`${this.baseUrl}/get-all-slides-object-url`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  mergeSlides(formData: FormData, embedded: boolean): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });
  
    const params = { embedded: embedded.toString() };
  
    return this.http.post<any>(`${this.baseUrl}/merge-slide`, formData, { headers, params }).pipe(
      catchError(this.handleError)
    );
  }

  // mergeSlides(formData: FormData, embedded: boolean): Observable<any> {
  //   const headers = this.getHeaders();
  //   const body = {
  //     embedded: embedded
  //   };

  //   return this.http.post<any>(`${this.baseUrl}/merge-slide`, formData, { headers, params: body }).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  search(searchKeyWord: string): Observable<any> {
    const headers = this.getHeaders();
    const url = `${this.baseUrl}/api/Search`;

    const params = { searchKeyWord: searchKeyWord };

    return this.http.get<any>(url, { headers, params }).pipe(
      catchError(this.handleError)
    );
  }

  private getHeaders(): HttpHeaders {
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
      throw new Error('No JWT token available');  
    }

    return new HttpHeaders({
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    });
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError(error);
  }

}

