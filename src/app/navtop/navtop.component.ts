import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { liff } from '@line/liff';

@Component({
  selector: 'app-navtop',
  templateUrl: './navtop.component.html',
  styleUrl: './navtop.component.css',
})
export class NavtopComponent implements OnInit {
  dropdown: boolean = false;
  drowdown2: boolean = false;
  dropdown2: any;
  displayName: any;

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.displayName = this.appComponent.getDisplayName();
    console.log(this.displayName); // should work now
  }

  logOut(){
    liff.logout();
    window.location.reload();
  }
}