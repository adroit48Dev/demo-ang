import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbCardModule, NbInputModule, NbButtonModule, NbStepperModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayManagementRoutingModule } from './holiday-management-routing.module';
import { DefaultHolidayComponent } from './defaultholiday/defaultholiday.component';
import { SpecialHolidayComponent } from './specialholiday/specialholiday.component';
import { HolidayManagementComponent } from './holiday-management.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateDefaultHolidayComponent } from './defaultholiday/create-default-holiday/create-default-holiday.component';
import { CreateSpecialHolidayComponent } from './specialholiday/create-special-holiday/create-special-holiday.component';
import { UpdateSpecialHolidayComponent } from './specialholiday/update-special-holiday/update-special-holiday.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UpdateDefaultHolidayComponent } from './defaultholiday/update-default-holiday/update-default-holiday.component';

@NgModule({
  declarations: [HolidayManagementComponent, DefaultHolidayComponent, SpecialHolidayComponent, CreateDefaultHolidayComponent, CreateSpecialHolidayComponent, UpdateSpecialHolidayComponent, UpdateDefaultHolidayComponent],
  imports: [
    CommonModule,
    HolidayManagementRoutingModule,
    NbCardModule,
    NbEvaIconsModule,
    NbInputModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbStepperModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ]
})
export class HolidayManagementModule { }
