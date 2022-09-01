import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-settings-youtube',
  templateUrl: './settings-youtube.component.html',
  styleUrls: ['./settings-youtube.component.scss']
})
export class SettingsYoutubeComponent implements OnInit {

  videoNums : number;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onInputChange(event: MatSliderChange) {
    this.videoNums = event.value;
  }

  closeModal() {
    
  }

}
