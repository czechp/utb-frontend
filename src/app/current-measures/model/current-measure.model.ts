import {FormControl, FormGroup, Validators} from "@angular/forms";

export type CurrentMeasureModel = {
  id: number;
  chargerId: number;
  current: number;
  umupNumber: string;
  createdAt: string
}

export type CurrentMeasureGetModel = {
  chargerId: number;
  from: string;
  to: string;
}

export type CurrentMeasureGetForm = {
  day: FormControl<string | null>,
  startHour: FormControl<string | null>,
  endHour: FormControl<string | null>,
}

export function createCurrentMeasureGetForm() {
  return new FormGroup<CurrentMeasureGetForm>({
    day: new FormControl(new Date().toISOString().slice(0, 10), Validators.required),
    startHour: new FormControl("00:00", Validators.required),
    endHour: new FormControl("23:59", Validators.required),
  });
}

export function currentMeasureGetFormToModel(chargerId: number, form: FormGroup<CurrentMeasureGetForm>): CurrentMeasureGetModel {
  const day = form.get("day")?.value as string;
  const startHour = form.get("startHour")?.value as string;
  const endHour = form.get("endHour")?.value as string;
  return {
    chargerId,
    from: `${day}T${startHour}`,
    to: `${day}T${endHour}`,
  }
}
