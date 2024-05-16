import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared.module";
import {ChargingsComponent} from './components/chargings/chargings.component';
import {ChargingsRemoveComponent} from './components/chargings-remove/chargings-remove.component';


@NgModule({
  declarations: [
    ChargingsComponent,
    ChargingsRemoveComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ChargingsComponent,
    ChargingsRemoveComponent
  ]
})
export class ChargingModule {
}
