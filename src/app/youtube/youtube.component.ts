import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, pluck } from 'rxjs';
import { Video } from '../interface/video.interface';
import { YoutubeService } from '../service/youtube/youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit, AfterViewInit {

  @ViewChild('input') inputElement!: ElementRef;

  inputTouched = false;
  loading = false;
  videos: Video[] = [];

  constructor(
    private youtubeService: YoutubeService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.inputElement) {
      fromEvent(this.inputElement.nativeElement, 'keyup')
        .pipe(
            debounceTime(500),
            pluck('target', 'value'),
            distinctUntilChanged(),
        )
        .subscribe(
          this.handleSearch(this.inputElement.nativeElement.value);
      )
    }
  }

  handleSearch(inputValue: string) {
    this.loading = true;
    this.youtubeService.getVideos(inputValue)
      .subscribe((items: any) => {
        console.log(items)
        this.videos = items.map((item: any) => ({
          title: item.snippet.title,
          videoId: item.id.videoId,
          videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          channelId: item.snippet.channelId,
          channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
          channelTitle: item.snippet.channelTitle,
          description: item.snippet.description,
          publishedAt: new Date(item.snippet.publishedAt),
          thumbnail: item.snippet.thumbnails.high.url
        }));
        this.inputTouched = true;
        this.loading = false;
      });
    }

}
