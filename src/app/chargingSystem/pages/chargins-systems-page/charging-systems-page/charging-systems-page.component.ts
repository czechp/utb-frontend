import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {ChargingSystemModel} from "../../../models/charging-system.model";
import {ChargingSystemHttpService} from "../../../services/charging-system-http.service";

@Component({
  selector: 'app-charging-systems-page',
  templateUrl: './charging-systems-page.component.html',
  styleUrls: ['./charging-systems-page.component.css']
})
export class ChargingSystemsPageComponent {
  chargingSystems$: Observable<ChargingSystemModel[]>;

  constructor(private chargingSystemHttpService: ChargingSystemHttpService) {
    this.chargingSystems$ = this.chargingSystemHttpService.findAllChargingSystems();
  }
}
