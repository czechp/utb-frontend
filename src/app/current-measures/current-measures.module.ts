import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentMeasureChargerPageComponent } from './page/current-measure-charger-page/current-measure-charger-page.component';
import { CurrentMeasuresChartComponent } from './component/current-measures-chart/current-measures-chart.component';
import {NgChartsModule} from "ng2-charts";
import { CurrentMeasuredFilterFormComponent } from './component/current-measured-filter-form/current-measured-filter-form.component';
import {SharedModule} from "../shared.module";



@NgModule({
  declarations: [
    CurrentMeasureChargerPageComponent,
    CurrentMeasuresChartComponent,
    CurrentMeasuredFilterFormComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    SharedModule
  ]
})
export class CurrentMeasuresModule { }
