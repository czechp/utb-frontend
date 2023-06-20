import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared.module";
import {AlarmsPageComponent} from './pages/alarms-page/alarms-page.component';
import {AlarmsListComponent} from './components/alarms-list/alarms-list.component';
import {AlarmTypePipe} from './pipes/alarm-type.pipe';


@NgModule({
  declarations: [
    AlarmsPageComponent,
    AlarmsListComponent,
    AlarmTypePipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AlarmModule {
}
