import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ReportRow} from "../model/report.model";
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../../configuration/URL";

@Injectable({
  providedIn: 'root'
})
export class ReportsHttpService {

  constructor(private http: HttpClient) { }

  getReport(from: string, to: string): Observable<ReportRow[]> {
    return this.http.get<ReportRow[]>(`${BACKEND_URL}/reports`, {params: {from, to}});
  }

  downloadReport(from: string, to: string) {
    const params = {from, to};
    return this.http.get(`${BACKEND_URL}/reports/file`, {
      params,
      responseType: 'blob'
    });
  }
}
