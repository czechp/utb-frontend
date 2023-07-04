import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NotificationModel} from "../../models/notification.model";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {NotificationRemoveModel} from "../../models/notification-remove.model";

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent {
  @Input()
  notifications: NotificationModel[] | null = null;
  @Output()
  notificationRemoved = new EventEmitter<NotificationRemoveModel>();
  faRemoved = faTrash;

  removeClick(id: number) {
    this.notificationRemoved.emit({notificationId: id})
  }
}
