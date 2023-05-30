import {FormControl, FormGroup, Validators} from "@angular/forms";

export interface ChargingSystemCreateForm {
  name: FormControl<string | null>;
  plcAddress: FormControl<string | null>;
  networkMask: FormControl<string | null>
}

export function createChargingSystemCreateForm(): FormGroup<ChargingSystemCreateForm> {
  return new FormGroup<ChargingSystemCreateForm>(
    {
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      plcAddress: new FormControl("", [Validators.required, Validators.minLength(8)]),
      networkMask: new FormControl("", [Validators.required, Validators.minLength(8)]),
    }
  );
}
