import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {createNotificationCreatForm, NotificationCreateForm} from "../../forms/notification-create.form";
import {FormGroup} from "@angular/forms";
import {ValidationMessages} from "../../../configuration/ValidationMessages";
import {NotificationCreateModel} from "../../models/notification-create.model";

@Component({
  selector: 'app-notification-create',
  templateUrl: './notification-create.component.html',
  styleUrls: ['./notification-create.component.css']
})
export class NotificationCreateComponent {
  @Input()
  chargingSystemId: number | undefined = 0;
  @Output()
  notificationCreated = new EventEmitter<NotificationCreateModel>;
  @ViewChild('formRef')
  formRef: any
  notificationCreateForm: FormGroup<NotificationCreateForm>;
  protected readonly ValidationMessages = ValidationMessages;

  constructor() {
    this.notificationCreateForm = createNotificationCreatForm();
  }

  notificationCreatedClick() {
    this.notificationCreated.emit({
      chargingSystemId: this.chargingSystemId as number,
      email: this.notificationCreateForm.get("email")?.value as string
    });
    this.formRef.resetForm();
  }
}
