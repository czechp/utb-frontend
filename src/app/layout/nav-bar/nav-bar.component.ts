import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {ChargingSystemHttpService} from "../../chargingSystem/services/charging-system-http.service";
import {ChargingSystemModel} from "../../chargingSystem/models/charging-system.model";
import {AuthorizationService} from "../../configuration/authorization/authorization.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  chargingSystems$: Observable<ChargingSystemModel[]> | undefined;

  constructor(private chargingSystemHttpService: ChargingSystemHttpService, private authorizationService: AuthorizationService) {
    if (this.authorizationService.isLogged())
      this.chargingSystems$ = chargingSystemHttpService.findAllChargingSystems();

  }
}
