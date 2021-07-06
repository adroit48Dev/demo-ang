import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { AuthGuard } from '../helpers/auth-guard';
import { LoginComponent } from '../auth/components/login/login.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      redirectTo: 'iot-dashboard',
      pathMatch: 'full',
    },
    {
      path: 'logout',
      component: LoginComponent
    },
    // {
    //   path: 'dashboard',
    //   component: ECommerceComponent,
    // },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
      // canActivate: [AuthGuard]
    },
    {
      path: 'layout',
      // canActivate: [AuthGuard],
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'product',
      loadChildren: () => import('./product/product.module')
        .then(m => m.ProductModule),
    },
    {
      path: 'messagesettings',
      loadChildren: () => import('./messagesettings/messagesettings.module')
        .then(m => m.MessagesettingsModule),
    },
    {
      path: 'notification',
      loadChildren: () => import('./notification/notification.module')
        .then(m => m.NotificationModule),
    },
    {
      path: 'casaaccounts',

      loadChildren: () => import('./casaaccounts/casaaccounts.module')
        .then(m => m.CasaaccountsModule),
    },
    {
      path: 'deposit',
      loadChildren: () => import('./deposit/deposit.module')
        .then(m => m.DepositModule),
    },
    {
      path: 'loans',
      loadChildren: () => import('./loans/loans.module')
        .then(m => m.LoansModule),
    },
    {
      path: 'employeemanagement',
      loadChildren: () => import('./employeemanagement/employeemanagement.module')
        .then(m => m.EmployeemanagementModule),
    },
    {
      path: 'forums',
      loadChildren: () => import('./forums/forums.module')
        .then(m => m.ForumsModule),
    },
    {
      path: 'attendanceservices',
      loadChildren: () => import('./attendanceservices/attendanceservices.module')
        .then(m => m.AttendanceServicesModule),
    },
    {
      path: 'emailservice',
      loadChildren: () => import('./emailservice/emailservice.module')
        .then(m => m.EmailServiceModule),
    },
    {
      path: 'holiday-management',
      loadChildren: () => import('./holiday-management/holiday-management.module')
        .then(m => m.HolidayManagementModule),
    },
    {
      path: 'documents',
      loadChildren: () => import('./documents/documents.module')
        .then(m => m.DocumentsModule),
    },

    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }
  ],
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
