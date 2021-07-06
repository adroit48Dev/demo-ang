import { EmailServiceComponent } from './emailservice.component';
import { EmailTemplateComponent } from './emailtemplate/emailtemplate.component';
import {SendEmailComponent} from './sendemail/sendemail.component';
import {ViewEmailTemplateComponent} from './viewemailtemp/viewemailtemplate.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';


const routes: Routes = [
  {
    path: '',
    component: EmailServiceComponent,
    children:[
      {
        path: 'emailtemplate',
        component: EmailTemplateComponent
      },
      {
        path: 'sendemail',
        component: SendEmailComponent
      },
      {
        path: 'viewemailtemplate',
        component: ViewEmailTemplateComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailServiceRoutingModule { }
