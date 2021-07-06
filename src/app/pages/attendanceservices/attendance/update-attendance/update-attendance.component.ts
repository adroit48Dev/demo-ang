import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../../helpers/helpers.component';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'ngx-update-attendance',
  templateUrl: './update-attendance.component.html',
  styleUrls: ['./update-attendance.component.scss']
})
export class UpdateAttendanceComponent implements OnInit {
  attendanceData: any = [];
  postData = {};
  attendanceID: any;
  attendanceUpdationForm: FormGroup;
  submitted: boolean = false;
  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private router: Router,
    private _attendanceService: AttendanceService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.attendanceUpdationForm = this.formBuilder.group({
      workdays: new FormControl("", [Validators.required]),
      actualdays: new FormControl("", [Validators.required]),
      work_hours: new FormControl("", [Validators.required]),
      paid_leave: new FormControl("", [Validators.required]),
      permissions: new FormControl("", [Validators.required])
    });
    const id = this._route.snapshot.paramMap.get('id');
    this.attendanceID = id
    console.log(this.attendanceID)
    this.getDeduction(id);
  }

  getDeduction(id) {

    this._attendanceService.getEmployeeAttendanceMethod(id).subscribe(
      res => {
        console.log(res)
        this.attendanceData = res[0];
        this.patchForm(this.attendanceData);
      },
      err => {
        this._helperComponent.showToast('danger', err)
      }
    )

  }

  patchForm(res) {
    if (res) {
      const obj = {
        workdays: res.workdays_month,
        actualdays: res.actual_days_month,
        work_hours: res.work_hours,
        paid_leave: res.paid_leave,
        permissions: res.permission_hours,
      };
      this.attendanceUpdationForm.patchValue(obj);
    }
  }

  get f() {
    return this.attendanceUpdationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.spinner.show();
    if (this.attendanceUpdationForm.invalid) {
      return;
    }

    Object.entries(this.attendanceUpdationForm.value).forEach(([key, values]) => {
      this.postData[key] = values;
    });

    this._attendanceService.updateEmployeeAttendanceMethod(this.attendanceID, this.postData).subscribe(
      res => {
        this.submitted = false;
        console.log(res);
        this.spinner.hide();
        this._helperComponent.showToast('success', res['message']);
        this.viewAttendance();
      },
      err => {
        console.log(err);
        this.spinner.hide();
        this._helperComponent.showToast('danger', err['message']);
      }
    );
  }

  onReset() {
    this.attendanceUpdationForm.reset();
    this.submitted = false;
  }


  viewAttendance() {
    this.router.navigate(['pages/attendanceservices/attendance']);
  }

}
