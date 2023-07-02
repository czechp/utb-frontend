import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ChargingModel} from "../models/charging.model";
import {BACKEND_URL} from "../../configuration/URL";
import {share} from "rxjs";
import {ChargingRemoveModel} from "../models/charging-remove.model";

@Injectable({
  providedIn: 'root'
})
export class ChargingHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getChargingsByCartId(cartId: number) {
    return this.httpClient.get<ChargingModel[]>(`${BACKEND_URL}/chargings/cart/${cartId}`)
      .pipe(share());
  }

  removeCharging(chargingRemoveModel: ChargingRemoveModel) {
    return this.httpClient.delete<void>(`${BACKEND_URL}/chargings/${chargingRemoveModel.chargingId}`).pipe(share());
  }
}
