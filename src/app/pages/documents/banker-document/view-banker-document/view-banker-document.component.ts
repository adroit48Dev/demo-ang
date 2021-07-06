import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../../helpers/helpers.component';

@Component({
  selector: 'ngx-view-banker-document',
  templateUrl: './view-banker-document.component.html',
  styleUrls: ['./view-banker-document.component.scss']
})
export class ViewBankerDocumentComponent implements OnInit {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent) { }

  ngOnInit(): void {
  }

}
