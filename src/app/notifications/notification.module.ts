import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationsPageComponent} from './pages/notifications-page/notifications-page.component';
import {SharedModule} from "../shared.module";
import {
  NotificationSystemSelectorComponent
} from './components/notification-system-selector/notification-system-selector.component';
import {NotificationsListComponent} from './components/notifications-list/notifications-list.component';
import {NotificationCreateComponent} from './components/notification-create/notification-create.component';


@NgModule({
  declarations: [
    NotificationsPageComponent,
    NotificationSystemSelectorComponent,
    NotificationsListComponent,
    NotificationCreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NotificationModule {
}
