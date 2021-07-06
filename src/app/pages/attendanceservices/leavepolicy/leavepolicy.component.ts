import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpersComponent } from '../../../helpers/helpers.component';
import { LeavepolicyService } from './leavepolicy.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'ngx-leavepolicy',
  templateUrl: './leavepolicy.component.html',
  styleUrls: ['./leavepolicy.component.scss']
})
export class LeavePolicyComponent implements OnInit {

     constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private leavepolicyservice: LeavepolicyService) { }
  LeavePolicyData = []
  ngOnInit(): void {
    this.AllLeavePolicy()
  }

  AllLeavePolicy() {
    debugger
    this.spinner.show();
    this.leavepolicyservice.allLeavePolicyGet()
      // .subscribe(
      //   res => {
      //     console.log(res);
      //     if (res.length < 0) {
      //       this.createLeavePolicy()
      //     }
      //     else {
      //       this.LeavePolicyData.push(res[0])
      //     }
      //   },
      //   err => {
      //     this._helperComponent.showToast('danger', err)
      //   }
      // )
      .subscribe(
        (res) => {
          console.log(res)
          if (res.length <= 0) {
            this.createLeavePolicy()
          }
          else {
            this.updateLeavePolicyData(res || []);
            // this.LeavePolicyData.push(res[0])
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
  updateLeavePolicyData(response) {
    this.LeavePolicyData = [];
    for (const res of response) {
      const date = res.date;
      const emp_details_id = res.emp_details_id;
      const employeename = res.employeename;
      const login_time = res.login_time;
      const month = res.month;
      const _id = res._id;
      const data = {
        date,
        emp_details_id,
        employeename,
        login_time,
        month,
        _id,
      };
      this.LeavePolicyData = [...this.LeavePolicyData, data];
    }
  }

  createLeavePolicy() {
    this.router.navigate(['pages/attendanceservices/leavepolicy/create-leave-policy']);
  }

  updateLeavePolicy(id) {
    this.router.navigate(['pages/attendanceservices/leavepolicy/update-leave-policy/' + id]);

  }
}
