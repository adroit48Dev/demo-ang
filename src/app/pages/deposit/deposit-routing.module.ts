import { BankDepositComponent } from './bank-deposit/bank-deposit.component';
import { DepositConditionComponent } from './deposit-condition/deposit-condition.component';
import { DepositSchemeComponent } from './deposit-scheme/deposit-scheme.component';
import { UserDepositComponent } from './user-deposit/user-deposit.component';
import { UpdateDepositConditionComponent } from './deposit-condition/update-deposit-condition/update-deposit-condition.component';
import { DepositConditionFormComponent } from './deposit-condition/deposit-condition-form/deposit-condition-form.component';
import { DepositSchemeFormComponent } from './deposit-scheme/deposit-scheme-form/deposit-scheme-form.component';
import { UpdateDepositSchemeComponent } from './deposit-scheme/update-deposit-scheme/update-deposit-scheme.component';
import { BankDepositFormComponent } from './bank-deposit/bank-deposit-form/bank-deposit-form.component';
import { UpdateBankDepositComponent } from './bank-deposit/update-bank-deposit/update-bank-deposit.component';
// user deposit modules
import { FdComponent } from './user-deposit/fd/fd.component';
import { RdComponent } from './user-deposit/rd/rd.component';
import { DepositInfoComponent } from './user-deposit/deposit-info/deposit-info.component';






import { DepositComponent } from './deposit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';


const routes: Routes = [
  {
    path: '',
    component: DepositComponent,
    children: [
      {
        path: 'bank-deposit',
        component: BankDepositComponent,
      },
      {
        path: 'bank-deposit/bank-deposit-form',
        component: BankDepositFormComponent,
      },
      {
        path: 'bank-deposit/update-bank-deposit/:id',
        component: UpdateBankDepositComponent,
      },
      {
        path: 'deposit-condition',
        component: DepositConditionComponent,
      },
      {
        path: 'deposit-condition/deposit-condition-form',
        component: DepositConditionFormComponent,
      },
      {
        path: 'deposit-condition/update-deposit-condition/:id',
        component: UpdateDepositConditionComponent,
      },
      {
        path: 'deposit-scheme',
        component: DepositSchemeComponent,
      },
      {
        path: 'deposit-scheme/deposit-scheme-form',
        component: DepositSchemeFormComponent,
      },
      {
        path: 'deposit-scheme/update-deposit-scheme/:id',
        component: UpdateDepositSchemeComponent,
      },
      {
        path: 'user-deposit',
        component: UserDepositComponent,
      },
      { path: 'user-deposit/fd', component: FdComponent },
      { path: 'user-deposit/rd', component: RdComponent },
      { path: 'user-deposit/deposit-info/:id', component: DepositInfoComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositRoutingModule { }
