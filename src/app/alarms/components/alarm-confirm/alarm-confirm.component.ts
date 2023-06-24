import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AlarmModel} from "../../models/alarm.model";

@Component({
  selector: 'app-alarm-confirm',
  templateUrl: './alarm-confirm.component.html',
  styleUrls: ['./alarm-confirm.component.css']
})
export class AlarmConfirmComponent {
  @Input()
  alarm: AlarmModel | null = null;
  @Output()
  alarmConfirmed = new EventEmitter<number>();

  alarmConfirmedClick() {
    this.alarmConfirmed.emit(this.alarm?.id);
  }
}
