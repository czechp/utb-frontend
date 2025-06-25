import {Injectable} from '@angular/core';
import {ReportFilterForm, ReportRow} from "../model/report.model";
import {FormGroup} from "@angular/forms";
import {ReportFormService} from "../model/report.form";
import {ReportsHttpService} from "./reports-http.service";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class ReportsPageStateService {
  filterForm: FormGroup<ReportFilterForm>;
  reports$ = new BehaviorSubject<ReportRow[] | null>(null);
  private reportFormService: ReportFormService;
  loaded$ = new BehaviorSubject<boolean | null>(null);

  constructor(private httpService: ReportsHttpService) {
    this.reportFormService = new ReportFormService();
    this.filterForm = this.reportFormService.getForm();
  }

  generateReport() {
    const range = this.filterForm.value as { from: string, to: string };
    this.loaded$.next(true);
    this.reports$.next(null);
    this.httpService.getReport(range.from, range.to).subscribe(report => {
      this.reports$.next(report);
      this.loaded$.next(false);
    });
  }
}
