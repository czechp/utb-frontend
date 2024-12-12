import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CurrentMeasureGetModel, CurrentMeasureModel} from "../model/current-measure.model";
import {BACKEND_URL} from "../../configuration/URL";

@Injectable({
  providedIn: 'root'
})
export class CurrentMeasureHttpService {

  constructor(private httpClient: HttpClient) { }

  getMeasures(getModel: CurrentMeasureGetModel) {
    return this.httpClient.get<CurrentMeasureModel[]>(`${BACKEND_URL}/measures/${getModel.chargerId}`, {
      params: {
        from: getModel.from,
        to: getModel.to
      }
    });
  }
}
