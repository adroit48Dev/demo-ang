import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import { AttendanceServicesComponent } from './attendanceservices.component';
import { EmployeeLeaveComponent } from './employeeleave/employeeleave.component';
import { LeavePolicyComponent } from './leavepolicy/leavepolicy.component';
import { SalaryComponent } from './salary/salary.component';
import { DeductionsComponent } from './deductions/deductions.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CreateAttendanceComponent } from './attendance/create-attendance/create-attendance.component';
import { UpdateAttendanceComponent } from './attendance/update-attendance/update-attendance.component';
import { CreateDeductionsComponent } from './deductions/create-deductions/create-deductions.component';
import { UpdateDeductionsComponent } from './deductions/update-deductions/update-deductions.component';
import { CreateSalaryComponent } from './salary/create-salary/create-salary.component';
import { UpdateSalaryComponent } from './salary/update-salary/update-salary.component';
import { CreateLeavePolicyComponent } from './leavepolicy/create-leave-policy/create-leave-policy.component';
import { UpdateLeavePolicyComponent } from './leavepolicy/update-leave-policy/update-leave-policy.component';
import { CreateEmployeeLeaveComponent } from './employeeleave/create-employee-leave/create-employee-leave.component';
import { UpdateEmployeeLeaveComponent } from './employeeleave/update-employee-leave/update-employee-leave.component';









const routes: Routes = [
  {
    path: '',
    component: AttendanceServicesComponent,
    children: [
      {
        path: 'employeeleave',
        component: EmployeeLeaveComponent
      },
      {
        path: 'employeeleave/create-employee-leave',
        component: CreateEmployeeLeaveComponent
      },
      {
        path: 'employeeleave/update-employee-leave',
        component: UpdateEmployeeLeaveComponent
      },
      {
        path: 'leavepolicy',
        component: LeavePolicyComponent
      },
      {
        path: 'leavepolicy/create-leave-policy',
        component: CreateLeavePolicyComponent
      },
      {
        path: 'leavepolicy/update-leave-policy/:id',
        component: UpdateLeavePolicyComponent
      },
      {
        path: 'salary',
        component: SalaryComponent
      },
      {
        path: 'salary/create-salary',
        component: CreateSalaryComponent
      },
      {
        path: 'salary/update-salary/:id',
        component: UpdateSalaryComponent
      },
      {
        path: 'deductions',
        component: DeductionsComponent
      },
      {
        path: 'deductions/create-deductions',
        component: CreateDeductionsComponent
      },
      {
        path: 'deductions/update-deductions/:id',
        component: UpdateDeductionsComponent
      },
      {
        path: 'attendance',
        component: AttendanceComponent
      },
      {
        path: 'attendance/create-attendance',
        component: CreateAttendanceComponent
      },
      {
        path: 'attendance/update-attendance/:id',
        component: UpdateAttendanceComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceServicesRoutingModule { }
