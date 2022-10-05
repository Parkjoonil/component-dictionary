import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { asapScheduler } from 'rxjs';
import { Video } from 'src/app/interface/video.interface';
import { MODAL_DATA } from 'src/app/modal/modal-token';
import { ModalRef } from 'src/app/modal/modal.service';
import { YoutubeService } from 'src/app/service/youtube/youtube.service';

type Dashboard = { channelName: string, channelId: string, videos?: Video[] };
type ChannelInfo = { channelName: string, channelId: string, thumbnail: string };
@Component({
  selector: 'app-channels-youtube',
  templateUrl: './channels-youtube.component.html',
  styleUrls: ['./channels-youtube.component.scss']
})
export class ChannelsYoutubeComponent implements OnInit {

  youtubeChannelIds: Dashboard[];

  indexNumberStart: number;

  channelName: string;

  channelList: string[];

  searchResults: ChannelInfo[] = [];


  constructor(
    @Inject(MODAL_DATA) data: any,
    private modalRef: ModalRef,
    private youtubeService: YoutubeService
  ) { 
    this.youtubeChannelIds = data;
    this.indexNumberStart = this.youtubeChannelIds.length;
    
  }

  ngOnInit(): void {

  }

  closeModal() {
    this.modalRef.close(this.youtubeChannelIds);
  }

  searchChannel(name: string) {
    this.youtubeService.getChannels(name).subscribe((res) => {
      res.map((channel) => {
        this.searchResults.push({
          channelId: channel.snippet.channelId,
          channelName: channel.snippet.channelTitle,
          thumbnail: channel.snippet.thumbnails.high.url
        })
      })
      
    });
    
  }

  deleteChannel(youtubeChannelId: Dashboard) {
    this.youtubeChannelIds.filter((element) => element !== youtubeChannelId)
  }

  addChannel(searchResult: ChannelInfo) {
    this.youtubeService.getChannelVideos(searchResult.channelId, 5).subscribe((videos) => {
      this.youtubeChannelIds.push({
        channelId: searchResult.channelId,
        channelName: searchResult.channelName,
        videos: videos
      })
    })
    
  }

}
