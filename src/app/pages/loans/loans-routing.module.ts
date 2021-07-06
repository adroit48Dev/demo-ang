import { LoansComponent } from './loans.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanComponent } from './loan/loan.component';
import { LoanAccountComponent } from './loan-account/loan-account.component';
import { LoanRepaymentComponent } from './loan-repayment/loan-repayment.component';
import { LoanApprovalComponent } from './loan-approval/loan-approval.component';
import { LoanCreationFormComponent } from './loan/loan-creation-form/loan-creation-form.component';
import { LoanAccCreationFormComponent } from './loan-account/loan-acc-creation-form/loan-acc-creation-form.component';
import { LoanViewComponent } from './loan/loan-view/loan-view.component';
import { LoanApplicationDetailsComponent } from './loan-approval/loan-application-details/loan-application-details.component';
import { PaymentDuesComponent } from './payment-dues/payment-dues.component';
import { PrepayClosureComponent } from './prepay-closure/prepay-closure.component';
import { LoanAccOverviewComponent } from './loan-acc-overview/loan-acc-overview.component';
import { DueDetailsComponent } from './payment-dues/due-details/due-details.component';
import { RepaymentDetailComponent } from './loan-repayment/repayment-detail/repayment-detail.component';
import { PrepayComponent } from './prepay-closure/prepay/prepay.component';










const routes: Routes = [
  {
    path: '',
    component: LoansComponent,
    children: [
      {
        path: 'loan',
        component: LoanComponent
      },
      {
        path: 'loan/loan-creation-form',
        component: LoanCreationFormComponent,
      },

      {
        path: 'loan/loan-veiw/:userid',
        component: LoanViewComponent,
      },
      {
        path: 'loan-account',
        component: LoanAccountComponent,
      },
      {
        path: 'loan-account/loan-acc-creation-form',
        component: LoanAccCreationFormComponent,
      },
      {
        path: 'loan-approval',
        component: LoanApprovalComponent,
      },
      {
        path: 'loan-approval/loan-application-details',
        component: LoanApplicationDetailsComponent,
      },
      {
        path: 'loan-repayment',
        component: LoanRepaymentComponent,
      },
      {
        path: 'loan-repayment/repayment-detail',
        component: RepaymentDetailComponent,
      },
      {
        path: 'payment-dues',
        component: PaymentDuesComponent,
      },
      {
        path: 'payment-dues/due-details',
        component: DueDetailsComponent,
      },
      {
        path: 'prepay-closure',
        component: PrepayClosureComponent,
      },
      {
        path: 'prepay-closure/prepay',
        component: PrepayComponent,
      },
      {
        path: 'loan-acc-overview',
        component: LoanAccOverviewComponent,
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule { }
