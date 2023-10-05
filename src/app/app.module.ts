import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import {HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';


import'ag-grid-enterprise';
import { MyCellComponent } from './components/my-cell/my-cell.component';



@NgModule({
  declarations: [
    AppComponent,
    MyCellComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
