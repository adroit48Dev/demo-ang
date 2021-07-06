import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule, NbInputModule,
} from '@nebular/theme';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OtppageComponent } from './components/otppage/otppage.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './components/token.interceptor';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, OtppageComponent],
  imports: [ 
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    NbAccordionModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NbTabsetModule, NbUserModule, NbInputModule,  
    RouterModule
  ],
  exports: [
    LoginComponent, 
    RegisterComponent,
    
  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule { }
