import { identifierName } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';
import { DeductionsService } from './deductions.service';

@Component({
  selector: 'ngx-salary',
  templateUrl: './deductions.component.html',
  styleUrls: ['./deductions.component.scss']
})
export class DeductionsComponent implements OnInit {

  noData: boolean = false;
  deductionsData: any = [];
  session: boolean = false;
  constructor(private spinner: NgxSpinnerService,
    private router: Router,
    private _deductionsService: DeductionsService,
    private _helpercomponent: HelpersComponent
  ) { }

  ngOnInit(): void {
    this.getAllDeductions()
  }


  getAllDeductions() {
    this._deductionsService.getEmployeeDeductionsList().subscribe(
      res => {
        console.log(res)
        if (res.length < 0 || res.length < 2) {
          this.noData = true;
        }
        else if (res.statuscode === 400) {
          this.session = true;
        }
        else {
          this.deductionsData.push(res)
        }
      },
      err => {
        this._helpercomponent.showToast('danger', err)
      }
    )
  }



  createDeductionsView() {
    this.router.navigate(['pages/attendanceservices/deductions/create-deductions']);
  }
  updateDeductionsView(emp_id) {
    console.log(emp_id);
    this.router.navigate(['pages/attendanceservices/deductions/update-deductions', emp_id]);

  }
}
