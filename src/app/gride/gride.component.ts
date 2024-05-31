import { Component } from '@angular/core';
import { YourService } from '../your-service.service';

@Component({
  selector: 'app-gride',
  templateUrl: './gride.component.html',
  styleUrls: ['./gride.component.css'],
})
export class GrideComponent {
  data1: any[] = []; // Change to any[] to accommodate data from the API

  constructor(private yourService: YourService) {
    this.yourService.getDataFromGateway('api1').subscribe(
      (data) => {
        console.log(data); // Log the response data to console
        this.data1 = data;
      },
      (error) => {
        console.error('Error fetching data from API Gateway:', error);
      }
    );
  }
}
