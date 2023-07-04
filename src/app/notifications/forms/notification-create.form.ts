import {FormControl, FormGroup, Validators} from "@angular/forms";

export interface NotificationCreateForm {
  email: FormControl<string | null>
}

export function createNotificationCreatForm() {
  return new FormGroup<NotificationCreateForm>({
    email: new FormControl<string | null>("", [Validators.email, Validators.required])
  });
}
