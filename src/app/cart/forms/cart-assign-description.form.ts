import {FormControl, FormGroup} from "@angular/forms";

export interface CartAssignDescriptionForm {
  description: FormControl<string | null>
}

export function createCartAssignDescriptionForm(description: string = "") {
  return new FormGroup<CartAssignDescriptionForm>({
    description: new FormControl<string | null>(description, [])
  });
}
