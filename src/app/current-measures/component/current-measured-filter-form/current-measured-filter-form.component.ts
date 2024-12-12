import {Component, Input} from '@angular/core';
import {CurrentMeasureGetForm} from "../../model/current-measure.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-current-measured-filter-form',
  templateUrl: './current-measured-filter-form.component.html',
  styleUrls: ['./current-measured-filter-form.component.css']
})
export class CurrentMeasuredFilterFormComponent {
  @Input()
  filterForm!: FormGroup<CurrentMeasureGetForm>;

  hours: string[] = [];

  constructor() {
    this.populateHours();
  }

  private populateHours() {
    for (let i = 0; i < 24; i++) {
      if(i < 10)
        this.hours.push(`0${i}:00`);
      else
        this.hours.push(`${i}:00`);
    }
  }
}
