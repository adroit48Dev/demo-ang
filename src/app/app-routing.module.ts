import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { OtppageComponent } from './auth/components/otppage/otppage.component';
import { AuthGuard } from './helpers/auth-guard';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'otp',
    component: OtppageComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'pages',
    canActivate: [AuthGuard],
    // pathMatch: 'full', 
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },

  // { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '**', redirectTo: 'login' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
