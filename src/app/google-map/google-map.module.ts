import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapComponent } from './google-map.component';



@NgModule({
  declarations: [
    GoogleMapComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
  ]
})
export class GoogleMapModule { }
