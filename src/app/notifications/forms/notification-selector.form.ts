import {FormControl, FormGroup} from "@angular/forms";

export interface NotificationSelectorForm {
  chargingSystemId: FormControl<number | null>
}

export function createNotificationSelectorForm(chargingSystemId = 1) {
  return new FormGroup<NotificationSelectorForm>({
    chargingSystemId: new FormControl<number | null>(chargingSystemId)
  });
}
