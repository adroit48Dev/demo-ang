import { NbCardModule, NbButtonModule, NbAccordionModule, NbInputModule, NbFormFieldModule, NbTreeGridModule, NbIconModule, NbStepperModule } from '@nebular/theme';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasaaccountsRoutingModule } from './casaaccounts-routing.module';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UsersinfoComponent } from './usersinfo/usersinfo.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';



@NgModule({
  declarations: [UsersinfoComponent, CreateprofileComponent],
  imports: [
    CommonModule,
    CasaaccountsRoutingModule,
    NbButtonModule,
    NbCardModule,
    NbFormFieldModule,
    NbTreeGridModule,
    NbIconModule,
    Ng2SmartTableModule,
    NbStepperModule,
    NbInputModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[
  ]
})
export class CasaaccountsModule { }
