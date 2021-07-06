import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../../helpers/helpers.component';
import { EmployeemanagementService } from '../../../employeemanagement/employeemanagement.service';
import { DeductionsService } from '../deductions.service';

@Component({
  selector: 'ngx-create-deductions',
  templateUrl: './create-deductions.component.html',
  styleUrls: ['./create-deductions.component.scss']
})
export class CreateDeductionsComponent implements OnInit {
  employeeData: any = [];
  postData: any = {};
  createDeductionsForm: FormGroup;
  submitted: boolean = false;
  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private router: Router,
    private _deductionsService: DeductionsService,
    private _employeeServie: EmployeemanagementService,
  ) { }

  ngOnInit(): void {
    this._employeeServie.allEmpGet()
      .subscribe(
        res => {
          console.log(res);
          this.employeeData = res;
        },
        err => {
          console.log(err);
        }
      )
    this.createDeductionsForm = this.formBuilder.group({
      empid: new FormControl("", [Validators.required]),
      empname: new FormControl("", [Validators.required]),
      pf: new FormControl("", [Validators.required]),
      esi: new FormControl("", [Validators.required]),
      insurance: new FormControl("", [Validators.required]),
      tax: new FormControl("", [Validators.required])
    });
  }

  get f() {
    return this.createDeductionsForm.controls;
  }

  onSubmit() {
    if (this.createDeductionsForm.invalid) {
      return
    }
    this.spinner.show();
    this.submitted = true;
    Object.entries(this.createDeductionsForm.value).forEach(([key, values]) => {
      this.postData[key] = values;
    });

    this._deductionsService.createEmployeeDeductions(this.postData).subscribe(
      res => {
        console.log(res);
        this._helperComponent.showToast('success', res['message']);
        this.spinner.hide();
        this.createDeductionsForm.reset();
        this.submitted = false;
      },
      err => {
        console.log(err);
        this.spinner.hide();
        this._helperComponent.showToast('danger', err['message']);
      }
    );
  }

  onReset() {
    this.createDeductionsForm.reset();
    this.submitted = false;
  }

  viewDeductions() {
    this.router.navigate(['pages/attendanceservices/deductions']);
  }

  onEmpChange(empid) {
    const filteredEmp = this.employeeData.find((data) => {
      return data._id = empid;
    });
    this.createDeductionsForm.patchValue({
      empname: filteredEmp.first_name,
      empid: empid
    }
    );
  }
}
