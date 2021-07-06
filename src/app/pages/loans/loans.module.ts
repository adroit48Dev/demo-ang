import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbStepperModule, NbCardModule, NbButtonModule, NbInputModule, NbTabsetModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoansRoutingModule } from './loans-routing.module';
import { MatTableModule } from '@angular/material/table';



import { LoanComponent } from './loan/loan.component';
import { LoanAccountComponent } from './loan-account/loan-account.component';
import { LoanRepaymentComponent } from './loan-repayment/loan-repayment.component';
import { LoanApprovalComponent } from './loan-approval/loan-approval.component';

// loan section
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


@NgModule({
  declarations: [LoanComponent, LoanAccountComponent, LoanRepaymentComponent, LoanApprovalComponent, LoanCreationFormComponent, LoanAccCreationFormComponent, LoanViewComponent, LoanApplicationDetailsComponent, PaymentDuesComponent, PrepayClosureComponent, LoanAccOverviewComponent, DueDetailsComponent, RepaymentDetailComponent, PrepayComponent,],
  imports: [
    CommonModule,
    LoansRoutingModule,
    NbStepperModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    NbTabsetModule


  ]
})
export class LoansModule { }
