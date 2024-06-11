import { Component } from '@angular/core';
import { Api_Gateway_Service } from '../Api_Gateway-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  firstName: string = '';
  lastName: string = '';

  constructor(private yourService: Api_Gateway_Service) { }

  onSubmit() {
    const member = {
      firstName: this.firstName,
      lastName: this.lastName
    };
    this.yourService.createData(member).subscribe(
      (response) => {
        console.log('Member created successfully:', response);
        // คุณอาจต้องการแสดงข้อความแจ้งเตือนหรือรีเซ็ตฟอร์มที่นี่
      },
      (error) => {
        console.error('Error creating member:', error);
        // คุณอาจต้องการแสดงข้อความแสดงข้อผิดพลาดที่นี่
      }
    );
  }
}
