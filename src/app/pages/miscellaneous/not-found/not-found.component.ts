import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
