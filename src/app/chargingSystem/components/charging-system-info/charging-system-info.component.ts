import {Component, Input} from '@angular/core';
import {ChargingSystemModel} from "../../models/charging-system.model";
import {faCircleExclamation, faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-charging-system-info',
  templateUrl: './charging-system-info.component.html',
  styleUrls: ['./charging-system-info.component.css']
})
export class ChargingSystemInfoComponent {
  @Input()
  chargingSystem!: ChargingSystemModel
  protected readonly faCircleExclamation = faCircleExclamation;
  protected readonly faTriangleExclamation = faTriangleExclamation;
}
