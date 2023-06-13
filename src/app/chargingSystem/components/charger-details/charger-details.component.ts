import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ChargingSystemHttpService} from "../../services/charging-system-http.service";
import {ChargerWithCartsModel} from "../../models/charger-with-carts.model";
import {Observable, tap} from "rxjs";
import {StatementService} from "../../../service/statement.service";
import {Router} from "@angular/router";
import {ChargerModalData} from "../chargers-list/chargers-list.component";
import {ChargerAssignCartModel} from "../../models/charger-assign-cart.model";

@Component({
  selector: 'app-charger-details',
  templateUrl: './charger-details.component.html',
  styleUrls: ['./charger-details.component.css']
})
export class ChargerDetailsComponent {
  chargerWithCart$: Observable<ChargerWithCartsModel> | null = null;
  systemId: number = 0;
  chargerPosition: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) private chargerModalData: ChargerModalData,
              private chargingSystemHttpService: ChargingSystemHttpService,
              private statementService: StatementService,
              private router: Router
  ) {
    this.getChargerDetails();
  }

  assignCartRequest(cartId: number) {
    const chargerAssignCartModel: ChargerAssignCartModel = {
      cartId: cartId,
      chargerPosition: this.chargerPosition,
      systemId: this.systemId
    }
    this.chargingSystemHttpService.assignCartToCharger(chargerAssignCartModel)
      .subscribe({
        next: () => {
          this.statementService.publicInfo("Wózek został przypisany");
          this.getChargerDetails();
        }
      })
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

  private getChargerDetails() {
    this.chargerWithCart$ = this.chargingSystemHttpService.getChargerWithCarts(this.chargerModalData.chargerId)
      .pipe(
        tap((charger => {
          this.systemId = charger.systemId;
          this.chargerPosition = charger.position;
        }))
      );
  }
}
