import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbInputModule, NbFormFieldModule,NbSelectModule,NbTabsetModule,NbCardModule, NbIconModule, NbButtonModule, NbDatepickerModule} from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ProductRoutingModule } from './product-routing.module';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { DepositdetailsComponent } from './depositdetails/depositdetails.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { UserAccountsComponent } from './user-accounts/user-accounts.component';
import { FeeDetailsComponent } from './fee-details/fee-details.component';
import { InterestDetailsComponent } from './interest-details/interest-details.component';
import { UserAccountChargeComponent } from './user-account-charge/user-account-charge.component';
import { UserAccountinterestComponent } from './user-accountinterest/user-accountinterest.component';
import { GenearalLedgerComponent } from './genearal-ledger/genearal-ledger.component';
import { HQTransactionComponent } from './hqtransaction/hqtransaction.component';
import { VaultTransactionComponent } from './vault-transaction/vault-transaction.component';
import { StatementserviceComponent } from './statementservice/statementservice.component';
import { AccountDetailsviewComponent } from './account-detailsview/account-detailsview.component';
import { AccountDetailsupdateComponent } from './account-detailsupdate/account-detailsupdate.component';
import { InterestDetailsupdateComponent } from './interest-detailsupdate/interest-detailsupdate.component';
import { InterestDetailsviewComponent } from './interest-detailsview/interest-detailsview.component';
import { FeeDetailsviewComponent } from './fee-detailsview/fee-detailsview.component';
import { FeeDetailsupdateComponent } from './fee-detailsupdate/fee-detailsupdate.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { UsersStatusComponent } from './users-status/users-status.component';
import { DataTablesModule } from 'angular-datatables';
import { TransPrintpageComponent } from './trans-printpage/trans-printpage.component';


@NgModule({
  declarations: [LoandetailsComponent, DepositdetailsComponent, AccountdetailsComponent, UserAccountsComponent, FeeDetailsComponent, InterestDetailsComponent, UserAccountChargeComponent, UserAccountinterestComponent, GenearalLedgerComponent, HQTransactionComponent, VaultTransactionComponent, StatementserviceComponent, AccountDetailsviewComponent, AccountDetailsupdateComponent, InterestDetailsupdateComponent, InterestDetailsviewComponent, FeeDetailsviewComponent, FeeDetailsupdateComponent,UserProfileComponent, UsersStatusComponent, TransPrintpageComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ProductRoutingModule,
    DataTablesModule,
    NbInputModule,
    NbSelectModule,
    NbTabsetModule,
    NbFormFieldModule,
    NbCardModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    NbDatepickerModule,
    Ng2SmartTableModule
  ],
  providers: [UserProfileComponent],

})
export class ProductModule { }
