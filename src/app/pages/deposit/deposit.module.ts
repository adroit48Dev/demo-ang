import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbCardModule, NbInputModule, NbButtonModule, NbStepperModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositRoutingModule } from './deposit-routing.module';
import { BankDepositComponent } from './bank-deposit/bank-deposit.component';
import { DepositConditionComponent } from './deposit-condition/deposit-condition.component';
import { DepositSchemeComponent } from './deposit-scheme/deposit-scheme.component';
import { UserDepositComponent } from './user-deposit/user-deposit.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UpdateDepositConditionComponent } from './deposit-condition/update-deposit-condition/update-deposit-condition.component';
import { DepositConditionFormComponent } from './deposit-condition/deposit-condition-form/deposit-condition-form.component';
import { DepositSchemeFormComponent } from './deposit-scheme/deposit-scheme-form/deposit-scheme-form.component';
import { UpdateDepositSchemeComponent } from './deposit-scheme/update-deposit-scheme/update-deposit-scheme.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BankDepositFormComponent } from './bank-deposit/bank-deposit-form/bank-deposit-form.component';
import { UpdateBankDepositComponent } from './bank-deposit/update-bank-deposit/update-bank-deposit.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DepositRoutingModule,
    NbCardModule,
    NbEvaIconsModule,
    NbInputModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbStepperModule,
    NgMultiSelectDropDownModule,
    MatTableModule
  ],
  declarations: [UserDepositComponent, DepositConditionComponent, DepositSchemeComponent, BankDepositComponent, UpdateDepositConditionComponent, DepositConditionFormComponent, DepositSchemeFormComponent, UpdateDepositSchemeComponent, BankDepositFormComponent, UpdateBankDepositComponent],

})
export class DepositModule { }
