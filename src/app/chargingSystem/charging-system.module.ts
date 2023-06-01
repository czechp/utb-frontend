import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ChargingSystemCreatePageComponent
} from './pages/charging-system-create-page/charging-system-create-page.component';
import {ChargingSystemAddFormComponent} from './components/charging-system-add-form/charging-system-add-form.component';
import {SharedModule} from "../shared.module";
import {ChargingSystemsListComponent} from './components/charging-systems-list/charging-systems-list.component';
import {
  ChargingSystemDetailsPageComponent
} from './pages/charging-system-details-page/charging-system-details-page.component';
import {ChargingSystemInfoComponent} from './components/charging-system-info/charging-system-info.component';
import {ChargersListComponent} from './components/chargers-list/chargers-list.component';


@NgModule({
  declarations: [
    ChargingSystemCreatePageComponent,
    ChargingSystemAddFormComponent,
    ChargingSystemsListComponent,
    ChargingSystemDetailsPageComponent,
    ChargingSystemInfoComponent,
    ChargersListComponent,
  ],
  exports: [
    ChargingSystemsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ChargingSystemModule {
}
