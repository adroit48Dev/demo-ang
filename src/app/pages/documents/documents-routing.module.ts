import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsComponent } from './documents.component';
import { EmployeeDocumentComponent } from './employee-document/employee-document.component';
import { BankerDocumentComponent } from './banker-document/banker-document.component';
import { UserDocumentComponent } from './user-document/user-document.component';
import { ViewEmpDocumentComponent } from './employee-document/view-emp-document/view-emp-document.component';
import { ViewUserDocumentComponent } from './user-document/view-user-document/view-user-document.component';
import { ViewBankerDocumentComponent } from './banker-document/view-banker-document/view-banker-document.component';
import { UploadBankerDocumentComponent } from './banker-document/upload-banker-document/upload-banker-document.component';


const routes: Routes = [
  {
    path: '',
    component: DocumentsComponent,
    children: [
      {
        path: 'employee-document',
        component: EmployeeDocumentComponent,
      },
      {
        path: 'employee-document/view-emp-document',
        component: ViewEmpDocumentComponent
      },
      {
        path: 'banker-document',
        component: BankerDocumentComponent
      },
      {
        path: 'banker-document/view-banker-document',
        component: ViewBankerDocumentComponent
      },
      {
        path: 'banker-document/upload-banker-document',
        component: UploadBankerDocumentComponent
      },
      {
        path: 'user-document',
        component: UserDocumentComponent
      },
      {
        path: 'user-document/view-user-document',
        component: ViewUserDocumentComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
