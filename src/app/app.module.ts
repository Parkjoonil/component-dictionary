import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadImageModule } from './upload-image/upload-image.module';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploadImageModule,
    WeatherComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
