import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { menuList } from './menu.const';

export type MenuInfo = {
  category: string;
  name: string;
  items: {
    icon: string;
    name: string;
    href: string;
  }[]
};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuList: MenuInfo[] = menuList;

  constructor() { }

  ngOnInit(): void {

  }
}
