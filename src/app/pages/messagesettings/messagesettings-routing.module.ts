import { EmailtemplateComponent } from './emailtemplate/emailtemplate.component';
import { MessagesettingsComponent } from './messagesettings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatecreationComponent } from './templatecreation/templatecreation.component';


const routes: Routes = [
  {
    path: '',
    component: MessagesettingsComponent,
    children: [
      {
        path: 'emailtemplate',
        component: EmailtemplateComponent
      },
      {
        path: 'templatecreation',
        component: TemplatecreationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesettingsRoutingModule { }
