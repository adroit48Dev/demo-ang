import { DepositdetailsComponent } from './depositdetails/depositdetails.component';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoandetailsComponent } from './loandetails/loandetails.component';
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
import { FeeDetailsviewComponent } from './fee-detailsview/fee-detailsview.component';
import { FeeDetailsupdateComponent } from './fee-detailsupdate/fee-detailsupdate.component';
import { InterestDetailsviewComponent } from './interest-detailsview/interest-detailsview.component';
import { InterestDetailsupdateComponent } from './interest-detailsupdate/interest-detailsupdate.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UsersStatusComponent} from './users-status/users-status.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children:[
      {
        path: 'accountdetails',
        component: AccountdetailsComponent,
      },
      {
        path: 'accountdetailsview',
        component: AccountDetailsviewComponent,
      },
      
      {
        path: 'accountdetailsedit/:id',
        component:  AccountDetailsupdateComponent,
      },
      {
        path: 'loandetails',
        component:  LoandetailsComponent,
      },
      {
        path: 'depositdetails',
        component:  DepositdetailsComponent,
      },
      {
        path: 'useraccount',
        component:  UserAccountsComponent,
      },
      {
        path: 'feedetails',
        component:  FeeDetailsComponent,
      },
      {
        path: 'feedetailsview',
        component:  FeeDetailsviewComponent,
      },
      {
        path: 'feedetailsupdate/:id',
        component:  FeeDetailsupdateComponent,
      },
      {
        path: 'interestdetails',
        component:  InterestDetailsComponent,
      },
      {
        path: 'interestdetailsview',
        component:  InterestDetailsviewComponent,
      },
      {
        path: 'interestdetailsupdate/:id',
        component:  InterestDetailsupdateComponent,
      },
      {
        path: 'userchargedaccounts',
        component:  UserAccountChargeComponent,
      },
      {
        path: 'useraccountsinterest',
        component:  UserAccountinterestComponent,
      },                
      {
        path: 'GenearalLedger',
        component:  GenearalLedgerComponent,
      },
      {
        path: 'hqtransaction',
        component:  HQTransactionComponent,
      },
      {
        path: 'vaulttransaction',
        component:  VaultTransactionComponent,
      },
      {
        path: 'statementservice',
        component:  StatementserviceComponent,
      },
      {
        path: 'user-profile',
        component:  UserProfileComponent,
      },
      {
        path: 'user-status',
        component:  UsersStatusComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
