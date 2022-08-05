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
        value => { this.search.emit(this.inputElement.nativeElement.value)}
      )
    }
  } 

}
