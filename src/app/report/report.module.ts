import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsPageComponent } from './page/reports-page/reports-page.component';
import { ReportsFilterFormComponent } from './component/reports-filter-form/reports-filter-form.component';
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../shared.module";
import { ReportRowsListComponent } from './component/report-rows-list/report-rows-list.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [
    ReportsPageComponent,
    ReportsFilterFormComponent,
    ReportRowsListComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        SharedModule,
        MatProgressSpinnerModule
    ]
})
export class ReportModule { }
