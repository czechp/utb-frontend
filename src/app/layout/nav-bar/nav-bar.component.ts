import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {ChargingSystemHttpService} from "../../chargingSystem/services/charging-system-http.service";
import {ChargingSystemModel} from "../../chargingSystem/models/charging-system.model";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  chargingSystems$: Observable<ChargingSystemModel[]>;

  constructor(private chargingSystemHttpService: ChargingSystemHttpService) {
    this.chargingSystems$ = chargingSystemHttpService.findAllChargingSystems();
  }
}
