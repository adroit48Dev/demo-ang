import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../helpers/helpers.component';

@Component({
  selector: 'ngx-forums',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./forums.component.scss']
})
export class ForumsComponent implements OnInit {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent) { }

  ngOnInit(): void {
  }

}
