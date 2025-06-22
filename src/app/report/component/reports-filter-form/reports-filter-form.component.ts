import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ReportFilterForm} from "../../model/report.model";

@Component({
  selector: 'app-reports-filter-form',
  templateUrl: './reports-filter-form.component.html',
  styleUrls: ['./reports-filter-form.component.css']
})
export class ReportsFilterFormComponent {
  @Input() filterForm!: FormGroup<ReportFilterForm>;
  @Output() generate = new EventEmitter<void>();

  generateOnClick() {
    this.generate.emit();
  }
}
