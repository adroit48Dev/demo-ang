
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NbSidebarModule, NbDatepickerModule, NbDialogModule, NbWindowModule, NbToastrModule, NbThemeModule, NbChatModule, NbLayoutModule, NbActionsModule, NbMenuModule, NbContextMenuModule, NbAccordionModule } from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ThemeModule } from '../../@theme/theme.module';
import { LayoutModule } from '../../pages/layout/layout.module';

@NgModule({
    declarations: [

    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        LayoutModule,
        RouterModule,
        NgxSpinnerModule,
        DataTablesModule,
        NbSidebarModule,
        NbDatepickerModule,
        NbDialogModule,
        NbWindowModule,
        NbToastrModule,
        NbThemeModule,
        NbChatModule,
        NbLayoutModule,
        NbActionsModule,
        NbMenuModule,
        NbContextMenuModule,
        ThemeModule, NbAccordionModule, NbMenuModule, NbDatepickerModule
    ],
    imports: [
        NbAccordionModule,
        NbMenuModule,
        NbDatepickerModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        LayoutModule,
        RouterModule,
        NgxSpinnerModule,
        DataTablesModule,
        NbSidebarModule.forRoot(),
        NbDatepickerModule.forRoot(),
        NbDialogModule.forRoot(),
        NbWindowModule.forRoot(),
        NbToastrModule.forRoot(),
        NbThemeModule.forRoot({ name: 'default' }),
        NbChatModule.forRoot({
            messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
        }),
        NbLayoutModule,
        NbActionsModule,
        NbMenuModule.forRoot(),
        NbContextMenuModule,
        ThemeModule.forRoot(),
    ],
})
export class SharingModules {
}