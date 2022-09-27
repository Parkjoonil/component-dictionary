import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { Video } from 'src/app/interface/video.interface';
import { MODAL_DATA } from 'src/app/modal/modal-token';
import { ModalRef } from 'src/app/modal/modal.service';
import { YoutubeService } from 'src/app/service/youtube/youtube.service';

type Dashboard = { channelName: string, channelId: string, videos?: Video[] };
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

  searchResults: Dashboard[];


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

  addChannel(name: string) {
    this.youtubeService.getChannels(name).subscribe((res) => {
      console.log(res);
      
    });
    
  }

  deleteChannel() {
    
  }

}
