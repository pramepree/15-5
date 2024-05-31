// // api-gateway.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiGatewayService {
//   private apiUrl = 'http://localhost:5000'; // URL ของ API Gateway

//   constructor(private http: HttpClient) { }

//   getDataFromGateway(uri: string): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/${uri}`);
//   }
// }
