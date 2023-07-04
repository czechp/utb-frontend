import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ChargingSystemModel} from "../../../chargingSystem/models/charging-system.model";
import {createNotificationSelectorForm, NotificationSelectorForm} from "../../forms/notification-selector.form";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-notification-system-selector',
  templateUrl: './notification-system-selector.component.html',
  styleUrls: ['./notification-system-selector.component.css']
})
export class NotificationSystemSelectorComponent implements OnChanges {
  @Input()
  chargingSystems: ChargingSystemModel [] | null = null;
  @Output()
  chargingSystemSelected = new EventEmitter<number>();
  notificationSystemSelectorForm: FormGroup<NotificationSelectorForm>;

  constructor() {
    this.notificationSystemSelectorForm = createNotificationSelectorForm();
    this.notificationSystemSelectorForm.get("chargingSystemId")?.valueChanges.subscribe((systemId) => {
      this.chargingSystemSelected.emit(systemId as number);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const systems = changes["chargingSystems"].currentValue as ChargingSystemModel [];
    if (systems && systems.length > 0) {
      this.notificationSystemSelectorForm.patchValue({chargingSystemId: systems[0].id})
    }

  }


}
