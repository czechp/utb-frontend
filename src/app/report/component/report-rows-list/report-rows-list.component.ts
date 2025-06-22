import {Component, Input} from '@angular/core';
import {ReportRow} from "../../model/report.model";

@Component({
  selector: 'app-report-rows-list',
  templateUrl: './report-rows-list.component.html',
  styleUrls: ['./report-rows-list.component.css']
})
export class ReportRowsListComponent {
  @Input() reportRows!: ReportRow[];

}
