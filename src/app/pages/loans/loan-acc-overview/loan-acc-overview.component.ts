import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-loan-acc-overview',
  templateUrl: './loan-acc-overview.component.html',
  styleUrls: ['./loan-acc-overview.component.scss']
})
export class LoanAccOverviewComponent implements OnInit {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent) { }

  ngOnInit(): void {
  }

}
