import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { asapScheduler } from 'rxjs';
import { Video } from 'src/app/interface/video.interface';
import { MODAL_DATA } from 'src/app/modal/modal-token';
import { ModalRef } from 'src/app/modal/modal.service';
import { YoutubeService } from 'src/app/service/youtube/youtube.service';

type Dashboard = { channelName: string, channelId: string, videos?: Video[] };
type ChannelInfo = { channelName: string, channelId: string, thumbnail?: string };
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
  searchResultsFinal: ChannelInfo[] = [];


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
    this.searchResults = [];
    this.youtubeService.getVideos(name, 3).subscribe((res) => {
      res.map((channel) => {
        this.youtubeService.getChannelInfo(channel.snippet.channelId).subscribe((info) => {
          this.searchResults.push({
            channelName: channel.snippet.channelTitle,
            channelId: channel.snippet.channelId,
            thumbnail: info.items[0].snippet.thumbnails.high.url
          })
          
        })
      })
    });
    
  }

  deleteChannel(youtubeChannelId: Dashboard) {
    this.youtubeChannelIds = this.youtubeChannelIds.filter((element) => element !== youtubeChannelId);
  }

  addChannel(searchResult: ChannelInfo) {
    this.youtubeService.getChannelVideos(searchResult.channelId, 5).subscribe((videos) => {
      const videoList: Video[] = [];
      for (const video of videos) {
        videoList.push({
          videoId: video.id.videoId,
          videoUrl: `https://www.youtube.com/watch?v=${video.id.videoId}`,
          title: video.snippet.title,
          publishedAt: video.snippet.publishedAt,
          thumbnail: video.snippet.thumbnails.high.url
        })
      }
      this.youtubeChannelIds.push({
        channelId: searchResult.channelId,
        channelName: searchResult.channelName,
        videos: videoList
      })
    })
    
  }

}
