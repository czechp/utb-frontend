import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ChargingSystemCreatePageComponent
} from './pages/charging-system-create-page/charging-system-create-page.component';
import {ChargingSystemAddFormComponent} from './components/charging-system-add-form/charging-system-add-form.component';
import {SharedModule} from "../shared.module";


@NgModule({
  declarations: [
    ChargingSystemCreatePageComponent,
    ChargingSystemAddFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ChargingSystemModule {
}
