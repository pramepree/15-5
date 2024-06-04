import { Component } from '@angular/core';
import { Api_Gateway_Service } from '../Api_Gateway-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  member = {
    user: '',
    password: '',
    email: '',
  };
  // component logic here
  constructor(private yourService: Api_Gateway_Service) {}

  onSubmit() {
    this.yourService.createData(this.member).subscribe(
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
