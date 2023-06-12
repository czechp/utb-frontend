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
import {ChargersListComponent} from './components/chargers-list/chargers-list.component';
import {
  ChargingSystemAssignChargerComponent
} from './components/charging-system-assign-charger/charging-system-assign-charger.component';
import {ChargerDetailsComponent} from './components/charger-details/charger-details.component';
import {ChargerRemoveComponent} from './components/charger-remove/charger-remove.component';


@NgModule({
  declarations: [
    ChargingSystemCreatePageComponent,
    ChargingSystemAddFormComponent,
    ChargingSystemsListComponent,
    ChargingSystemDetailsPageComponent,
    ChargersListComponent,
    ChargingSystemAssignChargerComponent,
    ChargerDetailsComponent,
    ChargerRemoveComponent,
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
