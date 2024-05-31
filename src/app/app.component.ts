import { Component, OnInit } from '@angular/core';
import { YourService } from './your-service.service';
import { get } from 'mongoose';
import liff from '@line/liff';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'tryConnect';
  data: any;
  dataString?: string;
  private profile1?: any;
  private DisplayName: any;
  static readonly data: any;
  responseData: any;
  getData() {
    return this.dataString;
  }
  constructor(private yourService: YourService) {
    this.data =
    liff
      .init({
        liffId: '2005388842-ZJLby0kd',
      })
      .then(() => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then((profile) => {
            console.log(profile);
            this.profile1 = profile;
            console.log(this.profile1);
            // Save profile1 to localStorage
            localStorage.setItem('profile1', JSON.stringify(this.profile1));
            this.DisplayName = profile.displayName;
          });
        } else {
          liff.login();
        }
      });
  }
  getDisplayName(): any {
    return this.DisplayName;
  }
  logOut() {
    liff.logout();
    window.location.reload();
  }
  ngOnInit() {
    this.yourService.getDataFromGateway('api1').subscribe(
      (data) => {
        this.responseData = data;
        console.log(this.responseData); // แสดงผลลัพธ์ที่ได้รับในคอนโซล
      },
      (error) => {
        console.error('Error fetching data from API Gateway:', error);
      }
    );
    this.yourService.getData().subscribe(
      (response) => {
        this.data = response;
        this.dataString = JSON.stringify(this.data, null, 2);
        console.log(this.data);
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }

  createData() {
    const newData = [
      {
        title: 'Basic Cache 101',
        content: 'Some content here...',
      },
    ];

    this.yourService.createData(newData).subscribe(
      (response) => {
        console.log('Data created successfully:', response);
        this.yourService.getData().subscribe(
          (updatedResponse) => {
            this.data = updatedResponse;
            this.dataString = JSON.stringify(this.data, null, 2);
          },
          (error) => {
            console.error('Error occurred while fetching updated data:', error);
          }
        );
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }
}
