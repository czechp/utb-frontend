import {FormControl, FormGroup, Validators} from "@angular/forms";

export interface CartAddForm {
  umupNumber: FormControl<string | null>,
  description: FormControl<string | null>
}

export function createCartAddForm() {
  return new FormGroup<CartAddForm>(
    {
      umupNumber: new FormControl("", [Validators.required, Validators.minLength(3)]),
      description: new FormControl(""),
    }
  );
}
