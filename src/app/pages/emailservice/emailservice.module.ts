import { NbCardModule, NbFontIcon, NbIconModule, NbButtonModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbCheckboxModule,
  NbListModule,
  NbDatepickerModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,  
} from '@nebular/theme';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailServiceRoutingModule } from './emailservice-routing.module';
import {EmailServiceComponent } from './emailservice.component';
import { EmailTemplateComponent } from './emailtemplate/emailtemplate.component';
import {SendEmailComponent} from './sendemail/sendemail.component';
import {ViewEmailTemplateComponent} from './viewemailtemp/viewemailtemplate.component'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { EmailServiceDialogComponent } from './email-service-dialog/email-service-dialog.component';

@NgModule({
  declarations: [EmailServiceComponent,EmailTemplateComponent,SendEmailComponent,ViewEmailTemplateComponent, EmailServiceDialogComponent],
  imports: [
    CommonModule,
    EmailServiceRoutingModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbSelectModule,
    NgMultiSelectDropDownModule, 
    FormsModule,
    ReactiveFormsModule,
    NbListModule,
    NbInputModule
  ]
})
export class EmailServiceModule { }
