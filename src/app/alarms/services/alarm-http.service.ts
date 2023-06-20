import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AlarmModel} from "../models/alarm.model";
import {BACKEND_URL} from "../../configuration/URL";
import {share} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlarmHttpService {

  constructor(private httpClient: HttpClient) {
  }

  public getAlarms() {
    return this.httpClient.get<AlarmModel[]>(`${BACKEND_URL}/alarms`).pipe(share());
  }
}
