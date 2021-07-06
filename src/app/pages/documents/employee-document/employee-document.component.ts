import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-employee-document',
  templateUrl: './employee-document.component.html',
  styleUrls: ['./employee-document.component.scss']
})
export class EmployeeDocumentComponent implements OnInit {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private router: Router) { }

  ngOnInit(): void {
  }
  viewDocument() {
    this.router.navigate(['pages/documents/employee-document/view-emp-document']);
  }
}
