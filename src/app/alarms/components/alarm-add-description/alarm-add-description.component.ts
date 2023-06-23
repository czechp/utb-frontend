import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {AlarmModel} from "../../models/alarm.model";
import {FormGroup} from "@angular/forms";
import {AlarmAddDescriptionForm, createAlarmDescriptionForm} from "../../forms/alarm-add-description.form";
import {AlarmAddDescriptionModel} from "../../models/alarm-add-description.model";

@Component({
  selector: 'app-alarm-add-description',
  templateUrl: './alarm-add-description.component.html',
  styleUrls: ['./alarm-add-description.component.css']
})
export class AlarmAddDescriptionComponent implements OnChanges {
  @Input()
  alarm: AlarmModel | null = null;
  alarmAddDescriptionForm: FormGroup<AlarmAddDescriptionForm>;
  @Output()
  descriptionAdded = new EventEmitter<AlarmAddDescriptionModel>();

  constructor() {
    this.alarmAddDescriptionForm = createAlarmDescriptionForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentDescription = changes["alarm"]?.currentValue?.description;
    if (currentDescription)
      this.alarmAddDescriptionForm = createAlarmDescriptionForm();
  }

  descriptionAddedClick() {
    const alarmAddDescriptionModel: AlarmAddDescriptionModel = {
      alarmId: this.alarm?.id as number,
      description: this.alarmAddDescriptionForm.get("description")?.value as string
    }
    this.descriptionAdded.emit(alarmAddDescriptionModel);
  }
}
