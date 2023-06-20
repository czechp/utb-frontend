import {Component, Input} from '@angular/core';
import {AlarmModel} from "../../models/alarm.model";

@Component({
  selector: 'app-alarms-list',
  templateUrl: './alarms-list.component.html',
  styleUrls: ['./alarms-list.component.css']
})
export class AlarmsListComponent {
  @Input()
  alarms: AlarmModel[] | null = [];
}
