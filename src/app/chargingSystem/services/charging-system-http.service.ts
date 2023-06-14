import {Injectable} from '@angular/core';
import {ChargingSystemCreateModel} from "../models/charging-system-create.model";
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../../configuration/URL";
import {share} from "rxjs";
import {ChargingSystemModel} from "../models/charging-system.model";
import {ChargingSystemAssignChargerModel} from "../models/charging-system-assign-charger.model";
import {ChargerWithCartsModel} from "../models/charger-with-carts.model";
import {ChargerAssignCartModel} from "../models/charger-assign-cart.model";
import {ChargerDetachCartModel} from "../models/charger-detach-cart.model";

@Injectable({
  providedIn: 'root'
})
export class ChargingSystemHttpService {
  constructor(private httpClient: HttpClient) {
  }

  createChargingSystem(chargingSystemCreateModel: ChargingSystemCreateModel) {
    return this.httpClient.post<void>(`${BACKEND_URL}/charging-systems`, chargingSystemCreateModel)
      .pipe(share());
  }

  findAllChargingSystems() {
    return this.httpClient.get<ChargingSystemModel[]>(`${BACKEND_URL}/charging-systems`)
      .pipe(share());
  }

  findChargingSystemById(systemId: number) {
    return this.httpClient.get<ChargingSystemModel>(`${BACKEND_URL}/charging-systems/${systemId}`)
      .pipe(share());
  }

  assignCharger(chargingSystemAssignChargerModel: ChargingSystemAssignChargerModel) {
    return this.httpClient.post<void>(`${BACKEND_URL}/charging-systems/charger`, chargingSystemAssignChargerModel)
      .pipe(share());
  }

  getChargerWithCarts(chargerId: number) {
    return this.httpClient.get<ChargerWithCartsModel>(`${BACKEND_URL}/charging-systems/charger/${chargerId}`)
      .pipe(share());
  }

  removeCharger(systemId: number, position: number) {
    const requestBody = {
      chargingSystemId: systemId,
      chargerPosition: position
    };
    return this.httpClient.delete<void>(`${BACKEND_URL}/charging-systems/charger`, {body: requestBody})
      .pipe(share());
  }

  assignCartToCharger(chargerAssignCartModel: ChargerAssignCartModel) {
    return this.httpClient.post<void>(`${BACKEND_URL}/charging-systems/charger/cart`, chargerAssignCartModel);
  }

  detachCart(detachCartModel: ChargerDetachCartModel) {
    return this.httpClient.delete(`${BACKEND_URL}/charging-systems/charger/cart`, {body: detachCartModel});
  }
}
