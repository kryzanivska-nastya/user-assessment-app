import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'https://user-assessment-api.vercel.app/api';
  token: string | null = localStorage.getItem('token');

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Token': this.token || '',
    });
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }

  getUserAssessments(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/userassessments`, {
      headers: this.getHeaders(),
    });
  }

  getGraphData(assessmentId: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/userassessments/graph?id=${assessmentId}`,
      { headers: this.getHeaders() }
    );
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users`, {
      headers: this.getHeaders(),
    });
  }
}
