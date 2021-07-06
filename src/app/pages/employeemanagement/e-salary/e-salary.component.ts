import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-e-salary',
  templateUrl: './e-salary.component.html',
  styleUrls: ['./e-salary.component.scss']
})
export class ESalaryComponent implements OnInit {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private router: Router) { }

  ngOnInit(): void {
  }

  SalarySlip() {
    this.router.navigate(['pages/employeemanagement/salaryslip'])
  }

}
