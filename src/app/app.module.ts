import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuDetailComponent } from './component/menu/menu-detail/menu-detail.component';
import { MenuComponent } from './component/menu/menu.component';
import { GoogleMapModule } from './google-map/google-map.module';
import { UploadImageModule } from './upload-image/upload-image.module';
import { WeatherModule } from './weather/weather.module';
import { YoutubeModule } from './youtube/youtube.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploadImageModule,
    WeatherModule,
    YoutubeModule,
    GoogleMapModule,
    CommonModule,
    IonicModule.forRoot({ mode: 'md', animated: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
