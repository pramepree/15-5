import { Component } from '@angular/core';
import { YourServiceLine } from '../your-service.line';
import { Api_Gateway_Service } from '../Api_Gateway-service';

@Component({
  selector: 'app-write-oop',
  templateUrl: './write-oop.component.html',
  styleUrl: './write-oop.component.css',
})
export class WriteOOpComponent {
  private data: any;
  // constructor() {
  //   const yourService = new YourServiceLine();
  // }
  constructor(private yourService: Api_Gateway_Service) {}

  getData() {
    return this.data;
  }
  setData(data: any) {
    this.data = data;
  }
}
