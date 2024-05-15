import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { YourService } from './your-service.service'; // import YourService
import { FormsModule } from '@angular/forms';
import { NavtopComponent } from './navtop/navtop.component';
import { TableComponent } from './table/table.component';
import { TextinputComponent } from './textinput/textinput.component';

@NgModule({
  declarations: [
    AppComponent,
    NavtopComponent,
    TableComponent,
    TextinputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule

  ],
  providers: [YourService], // เพิ่ม YourService เข้าไปใน providers
  bootstrap: [AppComponent]
})
export class AppModule { }
