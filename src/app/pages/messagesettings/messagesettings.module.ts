import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
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

import { ThemeModule } from '../../@theme/theme.module';
import { MessagesettingsRoutingModule } from './messagesettings-routing.module';
import { EmailtemplateComponent } from './emailtemplate/emailtemplate.component';
import { NgbModalModule, NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowcaseDialogComponent } from './showcase-dialog/showcase-dialog.component';
import { TemplatecreationComponent } from './templatecreation/templatecreation.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';





@NgModule({
  declarations: [EmailtemplateComponent, ShowcaseDialogComponent, TemplatecreationComponent],
  imports: [
    NbListModule,
    ThemeModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NgMultiSelectDropDownModule,    
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,    
    NbSelectModule,
    NbIconModule,
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
    MessagesettingsRoutingModule,
  ]
})
export class MessagesettingsModule { }
