
import { MessagesettingsComponent } from './messagesettings/messagesettings.component';
import { LoansComponent } from './loans/loans.component';
import { CasaaccountsComponent } from './casaaccounts/casaaccounts.component';
import { ProductComponent } from './product/product.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NbMenuModule, NbDatepickerModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';
import { NotificationComponent } from './notification/notification.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';
import { DocumentsComponent } from './documents/documents.component';
import { SharingModules } from '../@core/shared/sharing.modules';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NgxChartsModule,
    DashboardModule,
    ECommerceModule,
    RouterModule,
    SharingModules
  ],
  declarations: [
    PagesComponent,
    ProductComponent,
    CasaaccountsComponent,
    LoansComponent,
    MessagesettingsComponent,
    DepositComponent,
    DocumentsComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PagesModule {
}
