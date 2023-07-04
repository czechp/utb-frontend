import {Component} from '@angular/core';
import {ChargingSystemHttpService} from "../../../chargingSystem/services/charging-system-http.service";
import {Observable} from "rxjs";
import {ChargingSystemModel} from "../../../chargingSystem/models/charging-system.model";
import {NotificationModel} from "../../models/notification.model";
import {NotificationHttpService} from "../../services/notification-http.service";
import {NotificationCreateModel} from "../../models/notification-create.model";
import {StatementService} from "../../../service/statement.service";
import {NotificationRemoveModel} from "../../models/notification-remove.model";

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css']
})
export class NotificationsPageComponent {
  chargingSystems$: Observable<ChargingSystemModel[]> | undefined;
  notifications$: Observable<NotificationModel[]> | undefined;
  selectedChargingSystemId: number | undefined = undefined;

  constructor(private chargingSystemHttpService: ChargingSystemHttpService,
              private notificationHttpService: NotificationHttpService,
              private statementService: StatementService
  ) {
    this.getChargingSystems();
  }

  assignChargingSystem(chargingSystemId: number) {
    this.selectedChargingSystemId = chargingSystemId;
    this.getNotifications();
  }

  createNotificationRequest(notificationCreateModel: NotificationCreateModel) {
    this.notificationHttpService.create(notificationCreateModel)
      .subscribe({
        next: () => {
          this.statementService.publicInfo("Adresat został dodany")
          this.getNotifications();
        }
      });
  }

  removeNotificationRequest(notificationRemoveModel: NotificationRemoveModel) {
    this.notificationHttpService.removeNotification(notificationRemoveModel)
      .subscribe({
        next: () => {
          this.statementService.publicInfo("Adresat został usunięty");
          this.getNotifications();
        }
      })

  }

  private getNotifications() {
    this.notifications$ = this.notificationHttpService.getNotificationByChargingSystem(this.selectedChargingSystemId as number);
  }

  private getChargingSystems() {
    this.chargingSystems$ = this.chargingSystemHttpService.findAllChargingSystems();
  }
}
