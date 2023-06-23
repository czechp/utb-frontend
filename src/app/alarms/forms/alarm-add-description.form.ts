import {FormControl, FormGroup} from "@angular/forms";

export interface AlarmAddDescriptionForm {
  description: FormControl<string | null>
}

export function createAlarmDescriptionForm(initDescription: string = "") {
  return new FormGroup<AlarmAddDescriptionForm>({
    description: new FormControl<string | null>(initDescription, [])
  });
}
