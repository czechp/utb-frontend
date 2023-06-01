import {Component, Input} from '@angular/core';
import {ChargingSystemModel} from "../../models/charging-system.model";
import {faCircleCheck, faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-charging-systems-list',
  templateUrl: './charging-systems-list.component.html',
  styleUrls: ['./charging-systems-list.component.css']
})
export class ChargingSystemsListComponent {
  okIcon = faCircleCheck;
  errorIcon = faCircleExclamation;
  @Input()
  systems: ChargingSystemModel[] | null = null;

  constructor(private router: Router) {
  }

  public navigateToDetails(systemId: number) {
    this.router.navigate(["/charging-system-details", systemId]);
  }
}
