import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../interface/video.interface';
import { YoutubeService } from '../service/youtube/youtube.service';
import { MODAL_DATA } from '../modal/modal-token'
import { ModalService } from '../modal/modal.service';
import { SettingsYoutubeComponent } from './settings-youtube/settings-youtube.component';

type Dashboard = { channelName: string, channelId: string, videos?: Video[] };
@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit, AfterViewInit {

  @ViewChild('inputValue') inputElement: ElementRef;


  inputTouched = false;
  loading = false;
  videos: Video[] = [];
  keyword: string = '';
  count: number = 2;

  data: any

  youtubeChannelIds: Dashboard[] = [
    {
      channelName: '고세구',
      channelId: 'UCV9WL7sW6_KjanYkUUaIDfQ',
    },
    {
      channelName: '왁타버스',
      channelId: 'UCzh4yY8rl38knH33XpNqXbQ',
    },
    {
      channelName: '우왁굳',
      channelId: 'UCBkyj16n2snkRg1BAzpovXQ',
    },
  ]

  constructor(
    private youtubeService: YoutubeService,
    private router: Router,
    private modalService: ModalService,
    @Inject(MODAL_DATA) data
  ) { 
    this.data = data;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.youtubeChannelIds.map((id) => {
      this.youtubeService.getChannelVideos(id.channelId, this.count).subscribe((items) => {
          id.videos = items.map((item: any) => ({
            title: item.snippet.title,
            videoId: item.id.videoId,
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            publishedAt: new Date(item.snippet.publishedAt),
            thumbnail: item.snippet.thumbnails.high.url,
          }));              
      });
    })
  }

  handleSearch(keyword: string) {
    this.searchVideo(keyword, this.count);
  }

  watchVideo(url: string) {
    this.router.navigate([url])
  }


  private async searchVideo(keyword: string, count: number) {
    this.youtubeService.getVideos(keyword, count)
            .subscribe((items: any) => {
              
              if(this.videos.length === 0) {    
                this.videos = items.map((item: any) => ({
                  title: item.snippet.title,
                  videoId: item.id.videoId,
                  videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                  channelId: item.snippet.channelId,
                  channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
                  channelTitle: item.snippet.channelTitle,
                  description: item.snippet.description,
                  publishedAt: new Date(item.snippet.publishedAt),
                  thumbnail: item.snippet.thumbnails.high.url,
                }));
              } else {
                for (let i = 0; i < items.length; i++) {
                  const item = {
                    title: items[i].snippet.title,
                    videoId: items[i].id.videoId,
                    videoUrl: `https://www.youtube.com/watch?v=${items[i].id.videoId}`,
                    channelId: items[i].snippet.channelId,
                    channelUrl: `https://www.youtube.com/channel/${items[i].snippet.channelId}`,
                    channelTitle: items[i].snippet.channelTitle,
                    description: items[i].snippet.description,
                    publishedAt: new Date(items[i].snippet.publishedAt),
                    thumbnail: items[i].snippet.thumbnails.high.url,
                  }
                  this.videos.push(item);
                }                
              }
              this.inputTouched = true;
              this.loading = false;
            }
        );
  }

  setting() {
    this.modalService.openOverlay(SettingsYoutubeComponent, 3);
  }

  addChannel() {

  }

}
