import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-viewemailtemplate',
  templateUrl: './viewemailtemplate.component.html',
  styleUrls: ['./viewemailtemplate.component.scss']
})
export class ViewEmailTemplateComponent implements OnInit {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent) { }

  ngOnInit(): void {
  }

}
