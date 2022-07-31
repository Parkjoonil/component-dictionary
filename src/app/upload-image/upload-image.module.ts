import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImageComponent } from './upload-image.component';
import { ImageCropperModule } from 'ngx-image-cropper';




@NgModule({
  declarations: [
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    ImageCropperModule
  ]
})
export class UploadImageModule { }
