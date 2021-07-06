import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from '../../../helpers/common.service';
import { HelpersComponent } from '../../../helpers/helpers.component';
import { SalaryService } from './salary.service';
@Component({
  selector: 'ngx-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {

  salaryData: any = [];
  noData: boolean = false;
  session: boolean = false;
  constructor(private spinner: NgxSpinnerService,
    private router: Router,
    private _helperComponent: HelpersComponent,
    private _salaryService: SalaryService,
    private _commonService: CommonService,
    private _helpercomponent: HelpersComponent
  ) { }

  ngOnInit(): void {
    console.log('Salary')
    this.getAllSalary();
  }

  getAllSalary() {
    this._salaryService.getSalaryListMethod()
      .subscribe(
        (res) => {
          console.log(res)
          this.noData = true;
          if (this._commonService.isArray(res)) {
            if (res.length > 0) {
              this.noData = false;
              this.showDataInDatatable(res);
            }
          }
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });
  }


  /**
   * This method is used to refresh data in datatable
   */
  showDataInDatatable(response) {
    this.salaryData = [];
    for (const res of response) {
      this.salaryData = [...this.salaryData, res];
    }
  }

  createSalary() {
    this.router.navigate(['pages/attendanceservices/salary/create-salary']);
  }

  updateSalary(emp_id) {
    console.log(emp_id);
    this.router.navigate(['pages/attendanceservices/salary/update-salary', emp_id]);

  }
}
