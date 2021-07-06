import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { AttendanceService } from './attendance.service';
import { HelpersComponent } from '../../../helpers/helpers.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'ngx-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  noData: boolean = false;
  attendanceData: any = [];
  session: boolean = false;
  constructor(private spinner: NgxSpinnerService,
    private router: Router,
    private _attendanceService: AttendanceService,
    private _helpercomponent: HelpersComponent
  ) { }

  ngOnInit(): void {

    this.getAllDeductions()

  }

  getAllDeductions() {
    this._attendanceService.getAllEmployeeAttendanceMethod().subscribe(
      res => {
        console.log(res)
        if (res.length < 1) {
          this.noData = true;
        }
        else if (res.statuscode === 400) {
          this.session = true;
        }
        else {
          this.attendanceData.push(res)
        }
      },
      err => {
        this._helpercomponent.showToast('danger', err)
      }
    )
  }
  createAttendance() {
    this.router.navigate(['pages/attendanceservices/attendance/create-attendance']);
  }
  updateAttendance(emp_id) {
    console.log(emp_id)
    this.router.navigate(['pages/attendanceservices/attendance/update-attendance', emp_id]);
  }

}
