// your-service.service.ts
import { Injectable } from '@angular/core';
import liff from '@line/liff';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class YourServiceLine {
    private data: any;
    private DisplayName: any;
    private profile1?: any;
    constructor() { 
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

}
