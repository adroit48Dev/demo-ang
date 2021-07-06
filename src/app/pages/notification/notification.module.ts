import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbAccordionModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbListModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { NotifyComponent } from './notify/notify.component';


@NgModule({
  declarations: [NotifyComponent],
  imports: [
    NbActionsModule,
    NbAccordionModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbListModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    CommonModule,
    NotificationRoutingModule
  ]
})
export class NotificationModule { }
