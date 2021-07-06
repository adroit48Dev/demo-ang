import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceServicesRoutingModule } from './attendanceservices-routing.module';
import { AttendanceServicesComponent } from './attendanceservices.component';
import { EmployeeLeaveComponent } from './employeeleave/employeeleave.component';
import { LeavePolicyComponent } from './leavepolicy/leavepolicy.component';
import { SalaryComponent } from './salary/salary.component';
import { DeductionsComponent } from './deductions/deductions.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NbCardModule, NbButtonModule, NbUserModule, NbIconModule, NbDatepickerModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
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
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [AttendanceServicesComponent, EmployeeLeaveComponent,
    LeavePolicyComponent, SalaryComponent, DeductionsComponent, AttendanceComponent,
    CreateAttendanceComponent, UpdateAttendanceComponent, CreateDeductionsComponent,
    UpdateDeductionsComponent, CreateSalaryComponent, UpdateSalaryComponent, CreateLeavePolicyComponent,
    UpdateLeavePolicyComponent, CreateEmployeeLeaveComponent, UpdateEmployeeLeaveComponent],
  imports: [

    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AttendanceServicesRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbUserModule,
    NbIconModule,
    NbDatepickerModule,
    NgxSpinnerModule
  ]
})
export class AttendanceServicesModule { }
