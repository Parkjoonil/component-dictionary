import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, fromEvent, pluck } from 'rxjs';
import { Video } from '../interface/video.interface';
import { YoutubeService } from '../service/youtube/youtube.service';

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

  constructor(
    private youtubeService: YoutubeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.searchVideo('우왁굳');
    this.searchVideo('고세구');
    this.searchVideo('왁타버스');
    
  }

  handleSearch(keyword: string) {
    this.searchVideo(keyword);
  }

  watchVideo(url: string) {
    this.router.navigate([url])
  }


  private async searchVideo(keyword: string) {
    this.youtubeService.getVideos(`${keyword}`)
            .subscribe((items: any) => {
              if(this.videos.length === 0) {    
                console.log(items);
                
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

}
