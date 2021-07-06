import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { CoreModule } from './@core/core.module';
// import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './pages/layout/layout.module';
import { HelpersComponent } from './helpers/helpers.component';
import { DataTablesModule } from 'angular-datatables';
import { AuthGuard } from './helpers/auth-guard';
import { NgxSpinnerModule } from 'ngx-spinner';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { SharingModules } from './@core/shared/sharing.modules';
import { CoreModule } from './@core/core.module';

@NgModule({
  declarations: [AppComponent, HelpersComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    NgbModule,
    LayoutModule,
    RouterModule,
    NgxSpinnerModule,
    DataTablesModule,
    SharingModules,
    CoreModule.forRoot(),
  ],  
  bootstrap: [AppComponent],
  
  providers:[AuthGuard,HelpersComponent,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
],
  
})
export class AppModule {
}
