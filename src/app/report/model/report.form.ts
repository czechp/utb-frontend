import {ReportFilterForm} from "./report.model";
import {FormControl, FormGroup} from "@angular/forms";

export class ReportFormService {

  getForm(): FormGroup<ReportFilterForm> {
    const today = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    return new FormGroup<ReportFilterForm>({
      from: new FormControl<string | null>(oneYearAgo.toISOString().split('T')[0]),
      to: new FormControl<string | null>(today.toISOString().split('T')[0])
    })
  }
}
