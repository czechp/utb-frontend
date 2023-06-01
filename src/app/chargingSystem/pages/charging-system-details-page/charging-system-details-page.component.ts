import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {ChargingSystemModel} from "../../models/charging-system.model";
import {ChargingSystemHttpService} from "../../services/charging-system-http.service";
import {ActivatedRoute} from "@angular/router";
import {ChargingSystemAssignChargerModel} from "../../models/charging-system-assign-charger.model";
import {StatementService} from "../../../service/statement.service";

@Component({
  selector: 'app-charging-system-details-page',
  templateUrl: './charging-system-details-page.component.html',
  styleUrls: ['./charging-system-details-page.component.css']
})
export class ChargingSystemDetailsPageComponent {
  chargingSystem$: Observable<ChargingSystemModel> | null = null;
  tabPosition = 0;

  constructor(private chargingSystemHttpService: ChargingSystemHttpService, private activatedRoute: ActivatedRoute, private statementService: StatementService) {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.chargingSystem$ = chargingSystemHttpService.findChargingSystemById(params["id"]);
      }
    })
  }

  assignCharger(chargingSystemAssignChargerModel: ChargingSystemAssignChargerModel) {
    this.chargingSystemHttpService.assignCharger(chargingSystemAssignChargerModel)
      .subscribe({
        next: () => {
          this.statementService.publicInfo(`Prostownik na pozycji ${chargingSystemAssignChargerModel.chargerPosition} został dodany`);
          this.chargingSystem$ = this.chargingSystemHttpService.findChargingSystemById(chargingSystemAssignChargerModel.chargingSystemId);
          this.tabPosition = 0;
        }
      })
  }
}
