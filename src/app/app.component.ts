import { Component, OnInit } from '@angular/core';
import { YourService } from './your-service.service';
import { get } from 'mongoose';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tryConnect';
  data: any;
  dataString?: string;
  static data: any;

  getData() {
    return this.dataString;
  }
  constructor(private yourService: YourService) { }

  ngOnInit() {
    this.yourService.getData().subscribe(
      response => {
        this.data = response;
        this.dataString = JSON.stringify(this.data, null, 2);
        console.log(this.data);
      },
      error => {
        console.error('Error occurred:', error);
      }
    );
  }

  createData() {
    const newData = [
      {
        title: 'Basic Cache 101',
        content: 'Some content here...'
      }
    ];

    this.yourService.createData(newData).subscribe(
      response => {
        console.log('Data created successfully:', response);
        this.yourService.getData().subscribe(
          updatedResponse => {
            this.data = updatedResponse;
            this.dataString = JSON.stringify(this.data, null, 2);
          },
          error => {
            console.error('Error occurred while fetching updated data:', error);
          }
        );
      },
      error => {
        console.error('Error occurred:', error);
      }
    );
  }
}
