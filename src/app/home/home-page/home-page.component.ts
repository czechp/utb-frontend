import {Component} from '@angular/core';
import {ChargingSystemHttpService} from "../../chargingSystem/services/charging-system-http.service";
import {Observable} from "rxjs";
import {ChargingSystemModel} from "../../chargingSystem/models/charging-system.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  chargingSystems$: Observable<ChargingSystemModel[]>;

  constructor(private chargingSystemHttpService: ChargingSystemHttpService) {
    this.chargingSystems$ = this.chargingSystemHttpService.findAllChargingSystems();
  }
}
