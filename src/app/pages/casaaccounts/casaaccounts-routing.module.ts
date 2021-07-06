
import { UsersinfoComponent } from './usersinfo/usersinfo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasaaccountsComponent } from './casaaccounts.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';


const routes: Routes = [
  {
    path:'',
    component: CasaaccountsComponent,
    children:[
      {
        path: 'usersinfo',
        component: UsersinfoComponent
      },
      {
        path: 'createprofile',
        component: CreateprofileComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasaaccountsRoutingModule { }
