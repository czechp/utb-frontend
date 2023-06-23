import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {AlarmModel} from "../../models/alarm.model";
import {AlarmHttpService} from "../../services/alarm-http.service";

@Component({
  selector: 'app-alarms-page',
  templateUrl: './alarms-page.component.html',
  styleUrls: ['./alarms-page.component.css']
})
export class AlarmsPageComponent {
  alarms$: Observable<AlarmModel[]>;

  constructor(private alarmHttpService: AlarmHttpService) {
    this.alarms$ = alarmHttpService.getAlarms();
  }
}
