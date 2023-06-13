import {FormControl, FormGroup, Validators} from "@angular/forms";

export interface ChargingSystemAssignChargerForm {
  chargerPosition: FormControl<number | null>;
}

export function createChargingSystemAssignChargerForm() {
  return new FormGroup<ChargingSystemAssignChargerForm>({
    chargerPosition: new FormControl<number>(1, [Validators.required])
  });
}
