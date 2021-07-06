import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../../helpers/helpers.component';
import { EmployeemanagementService } from '../../../employeemanagement/employeemanagement.service';
import { SalaryService } from '../salary.service';

@Component({
  selector: 'ngx-create-salary',
  templateUrl: './create-salary.component.html',
  styleUrls: ['./create-salary.component.scss']
})
export class CreateSalaryComponent implements OnInit {
  employeeData: any = [];
  postData: any = {};
  createSalaryForm: FormGroup;
  submitted: boolean = false;
  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private router: Router,
    private _salaryService: SalaryService,
    private _employeeServie: EmployeemanagementService,
  ) { }

  ngOnInit(): void {
    console.log('create-salary');
    this._employeeServie.allEmpGet()
      .subscribe(
        res => {
          console.log(res);
          this.employeeData = res;
        },
        err => {
          console.log(err);
        }
      );
    this.createSalaryForm = this.formBuilder.group({
      empid: new FormControl("", [Validators.required]),
      empname: new FormControl("", [Validators.required]),
      assignedsalary: new FormControl("", [Validators.required]),
      deductions: new FormControl("", [Validators.required]),
      incentives: new FormControl("", [Validators.required]),
      noofleave: new FormControl("", [Validators.required])
    });
  }

  get f() {
    return this.createSalaryForm.controls;
  }

  onEmpChange(empid) {
    const filteredEmp = this.employeeData.find((data) => {
      return data._id = empid;
    });
    this.createSalaryForm.patchValue({
      empname: filteredEmp.first_name,
      empid: empid
    }
    );
  }

  onSubmit() {
    if (this.createSalaryForm.invalid) {
      return
    }
    this.spinner.show();
    this.submitted = true;
    Object.entries(this.createSalaryForm.value).forEach(([key, values]) => {
      this.postData[key] = values;
    });

    this._salaryService.createSalaryMethod(this.postData)
      .subscribe(
        (res) => {
          console.log(res);
          this._helperComponent.showToast('success', res['message']);
          this.spinner.hide();
          this.createSalaryForm.reset();
          this.submitted = false;
        },
        (err) => {
          console.log(err);
          this.spinner.hide();
          this._helperComponent.showToast('danger', err['message']);
        }).
      add(() => {
        this.spinner.hide();
      });
  }

  onReset() {
    this.createSalaryForm.reset();
    this.submitted = false;
  }

  viewSalary() {
    this.router.navigate(['pages/attendanceservices/salary']);

  }

}
