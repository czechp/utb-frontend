import {Component} from '@angular/core';
import {AlarmHttpService} from "../../services/alarm-http.service";
import {AlarmModel} from "../../models/alarm.model";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-alarm-details-page',
  templateUrl: './alarm-details-page.component.html',
  styleUrls: ['./alarm-details-page.component.css']
})
export class AlarmDetailsPageComponent {
  alarm$: Observable<AlarmModel> | undefined = undefined;
  alarmId: number = 0;

  constructor(private alarmHttpService: AlarmHttpService, private activatedRouter: ActivatedRoute) {
    this.alarmId = this.activatedRouter.snapshot.params["id"];
    this.getAlarmById();
  }

  confirmAlarmRequest(alarmId: number) {
    this.alarmHttpService.confirmAlarm(alarmId)
      .subscribe({
        next: () => {
          this.getAlarmById()
        }
      })
  }

  private getAlarmById() {
    this.alarm$ = this.alarmHttpService.getAlarmById(this.alarmId);
  }
}
