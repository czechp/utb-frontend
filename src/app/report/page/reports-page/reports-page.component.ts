import {Component} from '@angular/core';
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
  loaded$= this.stateService.loaded$;

  constructor(private stateService: ReportsPageStateService) {

  }

  generateReport() {
    this.stateService.generateReport();
  }

  downloadReport() {
    this.stateService.downloadReport();
  }
}
