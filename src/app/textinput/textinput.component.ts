import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Api_Gateway_Service } from '../Api_Gateway-service';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css'],
})
export class TextinputComponent {
  user: string = '';
  password: string = '';
  email: string = '';
  formSubmitted: boolean = false;
  data: any;
  dataString?: string;

  constructor(private yourService: Api_Gateway_Service) { }

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
    const jsonData = {
      "user": this.user,
      "password": this.password,
      "email": this.email
    };

    this.yourService.createData(jsonData).subscribe(
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