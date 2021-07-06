import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule, NbInputModule, NbIconModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NewsService } from './news.service';
import { BankregisterComponent } from './bankregister/bankregister.component';
import { BranchregisterComponent } from './branchregister/branchregister.component';
import { BranchviewComponent } from './branchview/branchview.component';
import { CommonCardComponent } from './common-card/common-card.component';
import { BranchEditComponent } from './branch-edit/branch-edit.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbCardModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbInputModule,
    NgxSpinnerModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbIconModule,
    NbAccordionModule,
    NbUserModule,
    LayoutRoutingModule,
  ],
  declarations: [
    LayoutComponent,
    BankregisterComponent,
    BranchregisterComponent,
    BranchviewComponent,
    CommonCardComponent,
    BranchEditComponent,
  ],
  providers: [
    NewsService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule { }
