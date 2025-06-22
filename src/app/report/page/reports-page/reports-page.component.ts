import { Component } from '@angular/core';
import {ReportsPageStateService} from "../../service/reports-page-state.service";

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.css'],
  providers: [ReportsPageStateService]
})
export class ReportsPageComponent {
  filterForm = this.stateService.filterForm;
  reportsRow$ = this.stateService.reports$;

  constructor(private stateService: ReportsPageStateService) {

  }

  generateReport() {
    this.stateService.generateReport();
  }
}
