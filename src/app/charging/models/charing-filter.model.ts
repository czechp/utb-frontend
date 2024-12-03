import {FormControl, FormGroup} from "@angular/forms";

export type ChargingFilterModel = {
  from: string;
  to: string;
}


export type ChargingFilterForm = {
  from: FormControl<string | null>,
  to: FormControl<string | null>,
}

export function createCharingFilterForm(): FormGroup<ChargingFilterForm> {
  const today = new Date().toISOString().slice(0, 10);
  return new FormGroup({
    from: new FormControl(today),
    to: new FormControl(today),
  })
}
