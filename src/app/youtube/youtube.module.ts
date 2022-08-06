import { NgModule } from '@angular/core';
import { YoutubeComponent } from './youtube.component';
import { YoutubeService } from '../service/youtube/youtube.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    YoutubeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  providers: [
    YoutubeService
  ]
})
export class YoutubeModule { }
