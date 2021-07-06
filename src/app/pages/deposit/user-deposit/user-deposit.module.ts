import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FdComponent } from './fd/fd.component';
import { RdComponent } from './rd/rd.component';
import { DepositInfoComponent } from './deposit-info/deposit-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [FdComponent, RdComponent, DepositInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule


  ]
})
export class UserDepositModule { }
