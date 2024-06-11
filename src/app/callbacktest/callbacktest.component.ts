import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-callbacktest',
  templateUrl: './callbacktest.component.html',
  styleUrls: ['./callbacktest.component.css']
})
export class CallbacktestComponent implements OnInit {
  responseData1: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDataFromExpress();
  }

  getDataFromExpress() {
    // Assuming your Express server is running on http://localhost:4200
    this.http.get<any>('/test').subscribe(
      (data) => {
        console.log('Response from Express:', data);
        this.responseData1 = data;
        this.handleResponseData(data);
      },
      (error) => {
        console.error('Error fetching data from Express:', error);
      }
    );
  }

  handleResponseData(data: any) {
    // Your logic to handle the response data goes here
  }
}