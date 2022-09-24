import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  imgChangeEvt: any = '';
  cropImagePreview: any = '';

  images: any [] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onFileChanged(event: any) {
    this.imgChangeEvt = event;
    
    this.cropImagePreview = event;
  }

  uploadImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();
 
              reader.onload = (event:any) => {
                 this.images.push(event.target.result); 

              }

              reader.readAsDataURL(event.target.files[i]);
      }
  }
  }

  cropImg(e: ImageCroppedEvent) {
    this.cropImagePreview = e.base64;
    console.log(this.cropImagePreview);
    
  }

  imgLoad() {

  }

  initCropper() {

  }

  imgFailed() {

  }

}
