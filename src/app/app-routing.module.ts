import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapComponent } from './google-map/google-map.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { WeatherComponent } from './weather/weather.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
  {
    path: 'upload-image',
    component: UploadImageComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'youtube',
    component: YoutubeComponent
  },
  {
    path: 'google-map',
    component: GoogleMapComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
