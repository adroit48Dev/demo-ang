import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-user-document',
  templateUrl: './user-document.component.html',
  styleUrls: ['./user-document.component.scss']
})
export class UserDocumentComponent implements OnInit {

     constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent, private router: Router) { }

  ngOnInit(): void {
  }

  viewDocument() {
    this.router.navigate(['pages/documents/user-document/view-user-document']);
  }

}
