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
import { OverlayModule } from '@angular/cdk/overlay'
import { PortalModule } from '@angular/cdk/portal';
import { MODAL_DATA } from './modal/modal-token';
import { ReactiveFormsModule } from '@angular/forms';

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
    OverlayModule,
    PortalModule,
    ReactiveFormsModule,
    IonicModule.forRoot({ mode: 'md', animated: false })
  ],
  providers: [
    { provide: MODAL_DATA, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
