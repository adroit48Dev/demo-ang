import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeemanagementComponent } from './employeemanagement.component';
import { EmployeemanageComponent } from './employeemanage/employeemanage.component';
import { ELogsComponent } from './e-logs/e-logs.component';
import { ESalaryComponent } from './e-salary/e-salary.component';
import { TransLimitComponent } from './trans-limit/trans-limit.component';
import { EmployeeRoleComponent } from './employeerole/employeerole.component';
import { ViewEmployeeComponent } from './viewemployee/viewemployee.component';
import { ViewTransLimitComponent } from './viewtrans-limit/viewtrans-limit.component';
import { AllEmpRoleListComponent } from './allemprolelist/allemprolelist.component';
import { ELogsViewComponent } from './e-logs-view/e-logs-view.component';
import { SalaryslipComponent } from './salaryslip/salaryslip.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateEmployeeroleComponent } from './update-employeerole/update-employeerole.component';
import { UpdateTransLimitComponent } from './update-trans-limit/update-trans-limit.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeemanagementComponent,
    children: [
      {
        path: 'employeemanage',
        component: EmployeemanageComponent
      },
      {
        path: 'viewemployee',
        component: ViewEmployeeComponent
      },
      {
        path: 'update-employee/:id',
        component: UpdateEmployeeComponent
      },
      {
        path: 'trans-limit',
        component: TransLimitComponent
      },
      {
        path: 'viewtrans-limit',
        component: ViewTransLimitComponent
      },
      {
        path: 'update-trans-limit/:id',
        component: UpdateTransLimitComponent
      },
      {
        path: 'employeerole',
        component: EmployeeRoleComponent
      },
      {
        path: 'allemprolelist',
        component: AllEmpRoleListComponent
      },
      {
        path: 'update-employeerole/:id',
        component: UpdateEmployeeroleComponent
      },
      {
        path: 'e-logs',
        component: ELogsViewComponent

      },
      {
        path: 'e-salary',
        component: ESalaryComponent
      },
      {
        path: 'salaryslip',
        component: SalaryslipComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeemanagementRoutingModule { }
