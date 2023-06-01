import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {ChargingSystemModel} from "../../models/charging-system.model";
import {ChargingSystemHttpService} from "../../services/charging-system-http.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-charging-system-details-page',
  templateUrl: './charging-system-details-page.component.html',
  styleUrls: ['./charging-system-details-page.component.css']
})
export class ChargingSystemDetailsPageComponent {
  chargingSystem$: Observable<ChargingSystemModel> | null = null;

  constructor(private chargingSystemHttpService: ChargingSystemHttpService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.chargingSystem$ = chargingSystemHttpService.findChargingSystemById(params["id"]);
      }
    })
  }
}
