import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbStepperModule, NbCardModule, NbButtonModule, NbInputModule, NbTabsetModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { DocumentsRoutingModule } from './documents-routing.module';
import { EmployeeDocumentComponent } from './employee-document/employee-document.component';
import { BankerDocumentComponent } from './banker-document/banker-document.component';
import { UserDocumentComponent } from './user-document/user-document.component';
import { ViewEmpDocumentComponent } from './employee-document/view-emp-document/view-emp-document.component';
import { ViewUserDocumentComponent } from './user-document/view-user-document/view-user-document.component';
import { ViewBankerDocumentComponent } from './banker-document/view-banker-document/view-banker-document.component';
import { UploadBankerDocumentComponent } from './banker-document/upload-banker-document/upload-banker-document.component';


@NgModule({
  declarations: [EmployeeDocumentComponent, BankerDocumentComponent, UserDocumentComponent, ViewEmpDocumentComponent, ViewUserDocumentComponent, ViewBankerDocumentComponent, UploadBankerDocumentComponent],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule
  ]
})
export class DocumentsModule { }
