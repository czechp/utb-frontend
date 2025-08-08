import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {AlarmModel} from "../../models/alarm.model";
import {AlarmHttpService} from "../../services/alarm-http.service";

@Component({
  selector: 'app-alarms-page',
  templateUrl: './alarms-connection-error-page.component.html',
  styleUrls: ['./alarms-connection-error-page.component.css']
})
export class AlarmsConnectionErrorPageComponent {
  alarms$: Observable<AlarmModel[]>;

  constructor(private alarmHttpService: AlarmHttpService) {
    this.alarms$ = alarmHttpService.getConnectionAlarms();
  }
}
