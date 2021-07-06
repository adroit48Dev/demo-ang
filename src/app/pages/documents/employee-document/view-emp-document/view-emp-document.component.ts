import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../../helpers/helpers.component';

@Component({
  selector: 'ngx-view-emp-document',
  templateUrl: './view-emp-document.component.html',
  styleUrls: ['./view-emp-document.component.scss']
})
export class ViewEmpDocumentComponent implements OnInit {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent) { }

  ngOnInit(): void {
  }

}
