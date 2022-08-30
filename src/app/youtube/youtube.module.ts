import { NgModule } from '@angular/core';
import { YoutubeComponent } from './youtube.component';
import { YoutubeService } from '../service/youtube/youtube.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsYoutubeComponent } from './settings-youtube/settings-youtube.component';
import { ChannelsYoutubeComponent } from './channels-youtube/channels-youtube.component';



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
    ReactiveFormsModule
  ],
  providers: [
    YoutubeService
  ]
})
export class YoutubeModule { }
