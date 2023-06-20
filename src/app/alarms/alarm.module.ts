import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared.module";
import {AlarmsPageComponent} from './pages/alarms-page/alarms-page.component';


@NgModule({
  declarations: [
    AlarmsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AlarmModule {
}
