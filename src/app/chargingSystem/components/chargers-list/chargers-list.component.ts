import {Component, Input} from '@angular/core';
import {ChargerModel} from "../../models/charging-system.model";
import {faCircleCheck, faCircleExclamation} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-chargers-list',
  templateUrl: './chargers-list.component.html',
  styleUrls: ['./chargers-list.component.css']
})
export class ChargersListComponent {
  @Input()
  chargers: ChargerModel[] | undefined = [];
  okIcon = faCircleCheck;
  errorIcon = faCircleExclamation;
}
