import {Component, EventEmitter, Output} from '@angular/core';
import {ChargingFilterModel, createChargingFilterForm} from "../../models/charing-filter.model";

@Component({
  selector: 'app-chargings-filter-form',
  templateUrl: './chargings-filter-form.component.html',
  styleUrls: ['./chargings-filter-form.component.css']
})
export class ChargingsFilterFormComponent {
  chargingFilterForm = createChargingFilterForm();
  @Output()
  filterTimeSelected = new EventEmitter<ChargingFilterModel>();
  @Output()
  timeFilterCleared = new EventEmitter<void>();

  timeRangeSelected() {
    const timeRange: ChargingFilterModel = {
      from: this.chargingFilterForm.get("from")?.value as string,
      to: this.chargingFilterForm.get("to")?.value as string
    };
    this.filterTimeSelected.emit(timeRange);
  }

  clearTimeFilter() {
    this.timeFilterCleared.emit();
  }
}
