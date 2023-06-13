import {FormControl, FormGroup} from "@angular/forms";

export interface ChargerAssignCartForm {
  cartId: FormControl<number | null>;
}

export function createChargerAssignCartForm() {
  return new FormGroup<ChargerAssignCartForm>({
    cartId: new FormControl<number | null>(1)
  });
}
