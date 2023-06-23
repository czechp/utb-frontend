import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared.module";
import {AlarmsPageComponent} from './pages/alarms-page/alarms-page.component';
import {AlarmsListComponent} from './components/alarms-list/alarms-list.component';
import {AlarmTypePipe} from './pipes/alarm-type.pipe';
import {AlarmDetailsPageComponent} from './pages/alarm-details-page/alarm-details-page.component';
import {AlarmInfoComponent} from './components/alarm-info/alarm-info.component';
import {AlarmConfirmComponent} from './components/alarm-confirm/alarm-confirm.component';
import {AlarmAddDescriptionComponent} from './components/alarm-add-description/alarm-add-description.component';
import {AlarmRemoveComponent} from './components/alarm-remove/alarm-remove.component';


@NgModule({
  declarations: [
    AlarmsPageComponent,
    AlarmsListComponent,
    AlarmTypePipe,
    AlarmDetailsPageComponent,
    AlarmInfoComponent,
    AlarmConfirmComponent,
    AlarmAddDescriptionComponent,
    AlarmRemoveComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AlarmModule {
}
