import {Component, Input} from '@angular/core';
import {ChargingSystemModel} from "../../models/charging-system.model";

@Component({
  selector: 'app-charging-system-info',
  templateUrl: './charging-system-info.component.html',
  styleUrls: ['./charging-system-info.component.css']
})
export class ChargingSystemInfoComponent {
  @Input()
  chargingSystem!: ChargingSystemModel
}
