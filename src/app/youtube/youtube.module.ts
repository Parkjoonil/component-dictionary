import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { YoutubeService } from '../service/youtube/youtube.service';
import { ChannelsYoutubeComponent } from './channels-youtube/channels-youtube.component';
import { SettingsYoutubeComponent } from './settings-youtube/settings-youtube.component';
import { YoutubeComponent } from './youtube.component';



@NgModule({
  declarations: [
    YoutubeComponent,
    SettingsYoutubeComponent,
    ChannelsYoutubeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatSliderModule,
  ],
  providers: [
    YoutubeService
  ]
})
export class YoutubeModule { }
