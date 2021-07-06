import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-e-logs',
  templateUrl: './e-logs.component.html',
  styleUrls: ['./e-logs.component.scss']
})
export class ELogsComponent implements OnInit {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent) { }

  ngOnInit(): void {
  }

}
