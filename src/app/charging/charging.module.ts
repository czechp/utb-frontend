import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared.module";
import {ChargingsComponent} from './components/chargings/chargings.component';


@NgModule({
  declarations: [
    ChargingsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ChargingsComponent
  ]
})
export class ChargingModule {
}
