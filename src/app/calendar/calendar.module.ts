import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    BrowserModule
  ]
})
export class CalendarModule { }
