import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../../component/confirmation-dialog/confirmation-dialog.component";
import {ConfirmationDialogModel} from "../../../component/confirmation-dialog/confirmation-dialog.model";

@Component({
  selector: 'app-charging-system-remove',
  templateUrl: './charging-system-remove.component.html',
  styleUrls: ['./charging-system-remove.component.css']
})
export class ChargingSystemRemoveComponent {
  @Input()
  chargingSystemId: number | undefined = 0;
  @Output()
  chargingSystemRemoved = new EventEmitter<number>();

  constructor(public dialog: MatDialog) {
  }

  showRemoveDialog() {
    const data: ConfirmationDialogModel = {
      title: "Potwierdzenie usunięcia systemu UTB",
      content: "Czy na pewno chcesz usunąć ten system?",
      confirm: () => {
        this.chargingSystemRemoved.emit(this.chargingSystemId)
      }
    };
    this.dialog.open(ConfirmationDialogComponent, {data});
  }
}
