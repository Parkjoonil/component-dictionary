import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadImageModule } from './upload-image/upload-image.module';
import { WeatherComponent } from './weather/weather.component';
import { WeatherModule } from './weather/weather.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploadImageModule,
    WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
