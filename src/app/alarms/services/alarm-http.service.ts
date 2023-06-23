import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AlarmModel} from "../models/alarm.model";
import {BACKEND_URL} from "../../configuration/URL";
import {share} from "rxjs";
import {AlarmConfirmModel} from "../models/alarm-confirm.model";
import {AlarmAddDescriptionModel} from "../models/alarm-add-description.model";
import {AlarmRemoveModel} from "../models/alarm-remove.model";

@Injectable({
  providedIn: 'root'
})
export class AlarmHttpService {

  constructor(private httpClient: HttpClient) {
  }

  public getAlarms() {
    return this.httpClient.get<AlarmModel[]>(`${BACKEND_URL}/alarms`).pipe(share());
  }

  getAlarmById(alarmId: number) {
    return this.httpClient.get<AlarmModel>(`${BACKEND_URL}/alarms/${alarmId}`).pipe(share());
  }

  confirmAlarm(alarmId: number) {
    const alarmConfirmModel: AlarmConfirmModel = {alarmId}
    return this.httpClient.post<void>(`${BACKEND_URL}/alarms/confirm`, alarmConfirmModel).pipe(share());
  }

  addDescription(alarmAddDescriptionModel: AlarmAddDescriptionModel) {
    return this.httpClient.post<void>(`${BACKEND_URL}/alarms/description`, alarmAddDescriptionModel).pipe(share());
  }

  removeAlarm(alarmRemoveModel: AlarmRemoveModel) {
    return this.httpClient.delete<void>(`${BACKEND_URL}/alarms`, {body: alarmRemoveModel}).pipe(share());
  }
}
