import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../../helpers/helpers.component';
import { EmployeemanagementService } from '../../../employeemanagement/employeemanagement.service';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'ngx-create-attendance',
  templateUrl: './create-attendance.component.html',
  styleUrls: ['./create-attendance.component.scss']
})
export class CreateAttendanceComponent implements OnInit {
  employeeData: any = [];
  postData: any = {};
  attendanceCreationForm: FormGroup;
  submitted: boolean = false;
  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private router: Router,
    private _attendanceService: AttendanceService,
    private _employeeServie: EmployeemanagementService
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
      );

    this.attendanceCreationForm = this.formBuilder.group({
      empid: new FormControl("", [Validators.required]),
      empname: new FormControl("", [Validators.required]),
      workdays: new FormControl("", [Validators.required]),
      actualdays: new FormControl("", [Validators.required]),
      work_hours: new FormControl("", [Validators.required]),
      paid_leave: new FormControl("", [Validators.required]),
      permissions: new FormControl("", [Validators.required])

    });
  }

  get f() {
    return this.attendanceCreationForm.controls;
  }

  onSubmit() {
    if (this.attendanceCreationForm.invalid) {
      return
    }
    this.spinner.show();
    this.submitted = true;
    Object.entries(this.attendanceCreationForm.value).forEach(([key, values]) => {
      this.postData[key] = values;
    });

    this._attendanceService.createEmployeeAttendanceMethod(this.postData).subscribe(
      res => {
        console.log(res);
        this._helperComponent.showToast('success', res['message']);
        this.spinner.hide();
        this.attendanceCreationForm.reset();
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
    this.attendanceCreationForm.reset();
    this.submitted = false;
  }


  viewAttendance() {
    this.router.navigate(['pages/attendanceservices/attendance']);
  }

  onEmpChange(empid) {
    const filteredEmp = this.employeeData.find((data) => {
      return data._id = empid;
    });
    this.attendanceCreationForm.patchValue({
      empid: empid,
      empname: filteredEmp.first_name,
    }
    );
  }
}
