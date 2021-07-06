import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../helpers/helpers.component';

@Component({
  selector: 'app-deposit',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent) { }

  ngOnInit(): void {
  }

}
