import {Component, Input} from '@angular/core';
import {AlarmModel} from "../../models/alarm.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-alarms-list',
  templateUrl: './alarms-list.component.html',
  styleUrls: ['./alarms-list.component.css']
})
export class AlarmsListComponent {
  @Input()
  alarms: AlarmModel[] | null = [];

  constructor(private router: Router) {
  }

  navigateToDetails(alarmId: number) {
    this.router.navigate(["/alarm-details", alarmId]);
  }
}
