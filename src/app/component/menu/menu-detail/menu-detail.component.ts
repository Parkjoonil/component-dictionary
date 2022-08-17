import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuInfo } from '../menu.component';


@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss'],
})
export class MenuDetailComponent implements OnInit {

  @Input() menu: MenuInfo;

  isActive = false;

  path: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe({
      next: (ev) => {
        if (ev instanceof NavigationEnd) {
          this.setPath()
        }
      }
    })

    this.setPath();
  }

  setPath() {
    this.path = location.href.split('/').pop().split('?')[0];
    if (this.menu.items.find(item => item.href.split('/')[1] === this.path)) {
      this.isActive = true;
    }
  }


}
