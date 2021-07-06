import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../../helpers/helpers.component';

@Component({
  selector: 'ngx-view-user-document',
  templateUrl: './view-user-document.component.html',
  styleUrls: ['./view-user-document.component.scss']
})
export class ViewUserDocumentComponent implements OnInit {

     constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent) { }

  ngOnInit(): void {
  }

}
