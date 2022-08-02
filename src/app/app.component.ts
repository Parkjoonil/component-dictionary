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
    'youtube'
  ]

  constructor(
    private router: Router
  ) {

  }

  open(url: string) {
    this.router.navigate([url])
  }
}
