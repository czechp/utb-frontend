import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NotificationModel} from "../models/notification.model";
import {BACKEND_URL} from "../../configuration/URL";
import {NotificationCreateModel} from "../models/notification-create.model";
import {NotificationRemoveModel} from "../models/notification-remove.model";
import {share} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getNotificationByChargingSystem(chargingSystemId: number) {
    return this.httpClient.get<NotificationModel[]>(`${BACKEND_URL}/notifications/system/${chargingSystemId}`).pipe(share());
  }

  create(notificationCreateModel: NotificationCreateModel) {
    return this.httpClient.post<void>(`${BACKEND_URL}/notifications`, notificationCreateModel).pipe(share());
  }

  removeNotification(notificationRemoveModel: NotificationRemoveModel) {
    return this.httpClient.delete<void>(`${BACKEND_URL}/notifications/${notificationRemoveModel.notificationId}`).pipe(share());
  }
}
