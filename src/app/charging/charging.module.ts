import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared.module";
import {ChargingsComponent} from './components/chargings/chargings.component';
import {ChargingsRemoveComponent} from './components/chargings-remove/chargings-remove.component';
import { ChargingsFilterFormComponent } from './components/chargings-filter-form/chargings-filter-form.component';
import { ChargingsRemoveDialogComponent } from './components/chargings-remove-dialog/chargings-remove-dialog.component';


@NgModule({
  declarations: [
    ChargingsComponent,
    ChargingsRemoveComponent,
    ChargingsFilterFormComponent,
    ChargingsRemoveDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ChargingsComponent,
    ChargingsRemoveComponent,
    ChargingsFilterFormComponent,
    ChargingsRemoveDialogComponent
  ]
})
export class ChargingModule {
}
