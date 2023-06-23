import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AlarmModel} from "../../models/alarm.model";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../../component/confirmation-dialog/confirmation-dialog.component";
import {ConfirmationDialogModel} from "../../../component/confirmation-dialog/confirmation-dialog.model";
import {AlarmRemoveModel} from "../../models/alarm-remove.model";

@Component({
  selector: 'app-alarm-remove',
  templateUrl: './alarm-remove.component.html',
  styleUrls: ['./alarm-remove.component.css']
})
export class AlarmRemoveComponent {
  @Input()
  alarm: AlarmModel | null = null;
  @Output()
  alarmRemoved = new EventEmitter<AlarmRemoveModel>()

  constructor(private dialog: MatDialog) {
  }

  alarmRemovedClick() {
    const data: ConfirmationDialogModel = {
      title: "Potwierdzenie usunięcia alarmu",
      content: "Czy na pewno chcesz usunąć alarm",
      confirm: () => {
        this.alarmRemoved.emit({alarmId: this.alarm?.id as number});
      }
    }
    this.dialog.open(ConfirmationDialogComponent, {data});
  }
}
