import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-dictionary';
  components: string[] = [
    'upload-image',
    'google-map',
    'youtube',
    'weather',
    'calendar'
  ]

  constructor(
    private router: Router
  ) {

  }

  open(url: string) {
    this.title = url;
    this.router.navigate([url])
  }
}
