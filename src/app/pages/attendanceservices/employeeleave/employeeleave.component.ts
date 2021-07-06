import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';
import { EmployeeserviceService } from './employeeservice.service';

@Component({
  selector: 'ngx-employeeleave',
  templateUrl: './employeeleave.component.html',
  styleUrls: ['./employeeleave.component.scss']
})
export class EmployeeLeaveComponent implements OnInit {

     constructor(private spinner: NgxSpinnerService, private router: Router, private empleavePolicy: EmployeeserviceService, private _helpercomponent: HelpersComponent) { }
  EmpLeavePolicyData = []
  ngOnInit(): void {
    this.getAllEmpLeave()


  }

  getAllEmpLeave() {
    this.empleavePolicy.allEmpLeaveGet().subscribe(
      res => {
        console.log(res)
        if (res.length < 0) {
          this.createEmployeeLeave()
        }
        else {
          this.EmpLeavePolicyData.push(res)
        }

      },
      err => {


        this._helpercomponent.showToast('danger', err)
      }
    )
  }
  createEmployeeLeave() {
    this.router.navigate(['pages/attendanceservices/employeeleave/create-employee-leave']);
  }

  updateEmployeeLeave(id) {
    this.router.navigate(['pages/attendanceservices/employeeleave/update-employee-leave/' + id]);

  }
}
