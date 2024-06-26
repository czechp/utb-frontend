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
import {
  ChargerAssignedCartsListComponent
} from './components/charger-assigned-carts-list/charger-assigned-carts-list.component';
import {ChargerAssignCartComponent} from './components/charger-assign-cart/charger-assign-cart.component';
import {ChargingSystemRemoveComponent} from './components/charging-system-remove/charging-system-remove.component';
import {
  ChargingSystemsPageComponent
} from './pages/chargins-systems-page/charging-systems-page/charging-systems-page.component';
import {ChargingSystemInfoComponent} from './components/charging-system-info/charging-system-info.component';
import {ChargerStateDirective} from './directives/charger-state.directive';


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
    ChargerAssignedCartsListComponent,
    ChargerAssignCartComponent,
    ChargingSystemRemoveComponent,
    ChargingSystemsPageComponent,
    ChargingSystemInfoComponent,
    ChargerStateDirective,
  ],
  exports: [
    ChargingSystemsListComponent,
    ChargersListComponent,
    ChargingSystemInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ChargingSystemModule {
}
