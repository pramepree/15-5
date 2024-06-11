import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Api_Gateway_Service } from './Api_Gateway-service'; // import YourService
import { FormsModule } from '@angular/forms';
import { NavtopComponent } from './navtop/navtop.component';
import { TableComponent } from './table/table.component';
import { TextinputComponent } from './textinput/textinput.component';
import { GrideComponent } from './gride/gride.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { WriteOOpComponent } from './write-oop/write-oop.component';
import { ImageComponent } from './image/image.component';
import { CallbacktestComponent } from './callbacktest/callbacktest.component';
import { SeeComponent } from './see/see.component';

@NgModule({
  declarations: [
    AppComponent,
    NavtopComponent,
    TableComponent,
    TextinputComponent,
    GrideComponent,
    FormComponent,
    GridComponent,
    WriteOOpComponent,
    ImageComponent,
    CallbacktestComponent,
    SeeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule

  ],
  providers: [Api_Gateway_Service], // เพิ่ม YourService เข้าไปใน providers
  bootstrap: [AppComponent]
})
export class AppModule { }
