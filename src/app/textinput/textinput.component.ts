import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { YourService } from '../your-service.service';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css'],
})
export class TextinputComponent {
  firstName: string = '';
  lastName: string = '';
  formSubmitted: boolean = false;
  data: any;
  dataString?: string;
  static data: any;
  constructor(private yourService: YourService) { }
  
  submit(form: NgForm) {
    
    this.formSubmitted = true;
    if (form.valid) {
      this.createData();
      // Proceed with submission
      console.log('Form is valid');
    } else {
      console.log('Form is invalid');
    }
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
