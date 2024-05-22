// your-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YourService {
  private apiUrl = 'http://localhost:3000'; // URL ของเซิร์ฟเวอร์ Node.js

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/articles`);
  }

  createData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/articles`, data);
  }
}
