import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ChargingSystemHttpService} from "../../services/charging-system-http.service";
import {ChargerWithCartsModel} from "../../models/charger-with-carts.model";
import {Observable} from "rxjs";
import {StatementService} from "../../../service/statement.service";
import {Router} from "@angular/router";
import {ChargerModalData} from "../chargers-list/chargers-list.component";

@Component({
  selector: 'app-charger-details',
  templateUrl: './charger-details.component.html',
  styleUrls: ['./charger-details.component.css']
})
export class ChargerDetailsComponent {
  chargerWithCart$: Observable<ChargerWithCartsModel>;

  constructor(@Inject(MAT_DIALOG_DATA) private chargerModalData: ChargerModalData,
              private chargingSystemHttpService: ChargingSystemHttpService,
              private statementService: StatementService,
              private router: Router
  ) {
    this.chargerWithCart$ = this.chargingSystemHttpService.getChargerWithCarts(chargerModalData.chargerId);
  }

  removeCharger(charger: ChargerWithCartsModel) {
    this.chargingSystemHttpService.removeCharger(charger.systemId, charger.position)
      .subscribe({
        next: () => {
          this.statementService.publicInfo(`Prostownik na pozycji ${charger.position} został usunięty`);
          this.router.navigate(["/charging-system-details", charger.systemId]);
          this.chargerModalData.close();
        }
      });
  }
}
