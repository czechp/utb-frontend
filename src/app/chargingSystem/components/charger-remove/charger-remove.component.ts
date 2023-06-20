import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChargerWithCartsModel} from "../../models/charger-with-carts.model";

@Component({
  selector: 'app-charger-remove',
  templateUrl: './charger-remove.component.html',
  styleUrls: ['./charger-remove.component.css']
})
export class ChargerRemoveComponent {
  @Input()
  charger: ChargerWithCartsModel | null = null;
  @Output()
  removeChargerEvent = new EventEmitter<ChargerWithCartsModel>();

  removeCharger() {
    this.removeChargerEvent.emit(this.charger as ChargerWithCartsModel);
  }
}
