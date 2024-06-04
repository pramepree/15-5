// your-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api_Gateway_Service {
  private apiUrl = 'http://localhost:5001'; // URL ของเซิร์ฟเวอร์ Node.js

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get_NameMember`);
  }
  getDataFromGateway(uri: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${uri}`);
  }
  createData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/post_NameMember`, data);
  }
}
