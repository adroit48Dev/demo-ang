import { DefaultHolidayComponent } from './defaultholiday/defaultholiday.component';
import { HolidayManagementComponent } from './holiday-management.component';
import { SpecialHolidayComponent } from './specialholiday/specialholiday.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDefaultHolidayComponent } from './defaultholiday/create-default-holiday/create-default-holiday.component';
import { CreateSpecialHolidayComponent } from './specialholiday/create-special-holiday/create-special-holiday.component';
import { UpdateSpecialHolidayComponent } from './specialholiday/update-special-holiday/update-special-holiday.component';
import { UpdateDefaultHolidayComponent } from './defaultholiday/update-default-holiday/update-default-holiday.component';



const routes: Routes = [
  {
    path: '',
    component: HolidayManagementComponent,
    children: [
      {
        path: 'defaultholiday',
        component: DefaultHolidayComponent
      },
      {
        path: 'defaultholiday/create-default-holiday',
        component: CreateDefaultHolidayComponent
      },
      {
        path: 'defaultholiday/update-default-holiday/:id',
        component: UpdateDefaultHolidayComponent
      },
      {
        path: 'specialholiday',
        component: SpecialHolidayComponent
      },
      {
        path: 'specialholiday/create-special-holiday',
        component: CreateSpecialHolidayComponent
      },
      {
        path: 'specialholiday/update-special-holiday/:id',
        component: UpdateSpecialHolidayComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayManagementRoutingModule { }
