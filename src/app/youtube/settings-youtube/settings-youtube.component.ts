import { Component, Inject, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { MODAL_DATA } from 'src/app/modal/modal-token';

@Component({
  selector: 'app-settings-youtube',
  templateUrl: './settings-youtube.component.html',
  styleUrls: ['./settings-youtube.component.scss']
})
export class SettingsYoutubeComponent implements OnInit {

  videoNums : number;

  constructor(
    @Inject(MODAL_DATA) data: any
  ) { 
    this.videoNums = data;
  }

  ngOnInit(): void {
  }

  onInputChange(event: MatSliderChange) {
    this.videoNums = event.value;
  }

  closeModal() {
    
  }

}
