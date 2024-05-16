import {Component, Input} from '@angular/core';
import {AlarmModel} from "../../models/alarm.model";

@Component({
  selector: 'app-alarm-info',
  templateUrl: './alarm-info.component.html',
  styleUrls: ['./alarm-info.component.css']
})
export class AlarmInfoComponent {
  @Input()
  alarm!: AlarmModel;
}
