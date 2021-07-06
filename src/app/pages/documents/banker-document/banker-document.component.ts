import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-banker-document',
  templateUrl: './banker-document.component.html',
  styleUrls: ['./banker-document.component.scss']
})
export class BankerDocumentComponent implements OnInit {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private router: Router) { }

  ngOnInit(): void {
  }
  viewDocument() {
    this.router.navigate(['pages/documents/banker-document/view-banker-document']);
  }
  uploadDocument() {
    this.router.navigate(['pages/documents/banker-document/upload-banker-document']);

  }
}
