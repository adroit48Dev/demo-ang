import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../helpers/helpers.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

@Component({
  selector: 'app-product',
  template:  `<router-outlet></router-outlet>`,
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent) { }

  

  ngOnInit(): void {
  }

}
