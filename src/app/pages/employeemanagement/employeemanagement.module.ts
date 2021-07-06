import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeemanagementRoutingModule } from './employeemanagement-routing.module';
import { EmployeemanagementComponent } from './employeemanagement.component';
import { EmployeemanageComponent } from './employeemanage/employeemanage.component';
import { NbCardModule, NbButtonModule, NbUserModule, NbIconModule, NbDatepickerModule } from '@nebular/theme';
import { ELogsComponent } from './e-logs/e-logs.component';
import { ESalaryComponent } from './e-salary/e-salary.component';
import { TransLimitComponent } from './trans-limit/trans-limit.component';
import { EmployeeRoleComponent } from './employeerole/employeerole.component';
import { ViewEmployeeComponent } from './viewemployee/viewemployee.component';
import { ViewTransLimitComponent } from './viewtrans-limit/viewtrans-limit.component';
import { AllEmpRoleListComponent } from './allemprolelist/allemprolelist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

import { ELogsViewComponent } from './e-logs-view/e-logs-view.component';
import { DataTablesModule } from 'angular-datatables';

import { DateCustomPipe } from './e-logs-view/DateCustompipe';

import { SalaryslipComponent } from './salaryslip/salaryslip.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateEmployeeroleComponent } from './update-employeerole/update-employeerole.component';
import { UpdateTransLimitComponent } from './update-trans-limit/update-trans-limit.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';





@NgModule({
  declarations: [

    EmployeemanagementComponent,
    EmployeemanageComponent,
    ELogsComponent,
    ESalaryComponent,
    TransLimitComponent,
    EmployeeRoleComponent,
    ViewEmployeeComponent,
    ViewTransLimitComponent,
    AllEmpRoleListComponent,
    ELogsViewComponent,
    DateCustomPipe,
    EmployeemanagementComponent,
    EmployeemanageComponent,
    ELogsComponent,
    ESalaryComponent,
    TransLimitComponent,
    EmployeeRoleComponent,
    ViewEmployeeComponent,
    ViewTransLimitComponent,
    AllEmpRoleListComponent,
    ELogsViewComponent,
    SalaryslipComponent,
    UpdateEmployeeComponent,
    UpdateEmployeeroleComponent,
    UpdateTransLimitComponent
  ],
  imports: [
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    CommonModule,
    NgxSpinnerModule,
    EmployeemanagementRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbUserModule,
    NbIconModule,
    NbDatepickerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class EmployeemanagementModule { }
