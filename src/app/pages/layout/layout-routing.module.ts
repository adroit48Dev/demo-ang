import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { BankregisterComponent } from './bankregister/bankregister.component';
import { BranchregisterComponent } from './branchregister/branchregister.component';
import { BranchviewComponent } from './branchview/branchview.component';
import { BranchEditComponent } from './branch-edit/branch-edit.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'bankregister',
      component: BankregisterComponent,
    },
    {
      path: 'bankedit/:id',
      component: BranchEditComponent,
    },
    {
      path: 'branchregister',
      component: BranchregisterComponent,
    },
    {
      path: 'branchview',
      component: BranchviewComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
