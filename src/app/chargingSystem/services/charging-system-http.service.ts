import {Injectable} from '@angular/core';
import {ChargingSystemCreateModel} from "../models/charging-system-create.model";
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../../configuration/URL";
import {share} from "rxjs";

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
}
