import { Component, Inject, OnInit } from '@angular/core';
import { Video } from 'src/app/interface/video.interface';
import { MODAL_DATA } from 'src/app/modal/modal-token';
import { ModalRef } from 'src/app/modal/modal.service';

type Dashboard = { channelName: string, channelId: string, videos?: Video[] };
@Component({
  selector: 'app-channels-youtube',
  templateUrl: './channels-youtube.component.html',
  styleUrls: ['./channels-youtube.component.scss']
})
export class ChannelsYoutubeComponent implements OnInit {

  youtubeChannelIds: Dashboard;

  indexNumberStart: number;

  channelName: string;

  constructor(
    @Inject(MODAL_DATA) data: any,
    private modalRef: ModalRef
  ) { 
    this.youtubeChannelIds = data;
    this.indexNumberStart = data.length();
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalRef.close(this.youtubeChannelIds);
  }

  addChannel(name: string) {
    this.modalRef.close(name);
  }

}
