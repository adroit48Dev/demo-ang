import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
            <nb-layout>
                <nb-layout-column>
                <ngx-one-column-layout>
                  <nb-menu [items]="menu"></nb-menu>
                  <router-outlet></router-outlet>
                </ngx-one-column-layout>
                </nb-layout-column>
            </nb-layout>
<!-- 
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout> -->
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
