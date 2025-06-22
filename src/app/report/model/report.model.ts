import {FormControl} from "@angular/forms";

export type ReportFilterForm = {
  from: FormControl<string | null>,
  to: FormControl<string | null>,
}


export type ReportRow = {
  orderNumber: number;
  umupNumber: string;
  chargingAmount: number;
  totalTime: number;
  averageCurrent: number;
}
