import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private API_KEY = 'AIzaSyBJkA_NBssyQV_Ps31PKm6tw5ZExE7cf34';
  private API_URL = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) {}
  getVideos(query: string): Observable <any> {
    const url = `${this.API_URL}/search?q=${query}&key=${this.API_KEY}&part=snippet&type=video&maxResults=5`;
    return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );
  }

  getChannelVideos(channelId : string): Observable <any> {  
    
    const url = `${this.API_URL}/search?&key=${this.API_KEY}&part=snippet&type=video&order=date&channelId=${channelId}&maxResults=5`;
    return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );
  }

}
