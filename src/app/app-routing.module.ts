import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path: 'upload-image',
    component: UploadImageComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
