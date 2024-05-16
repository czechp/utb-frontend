import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogModel} from "../../../component/confirmation-dialog/confirmation-dialog.model";
import {ConfirmationDialogComponent} from "../../../component/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-chargings-remove',
  templateUrl: './chargings-remove.component.html',
  styleUrls: ['./chargings-remove.component.css']
})
export class ChargingsRemoveComponent {
  @Output()
  chargingHistoryRemoved = new EventEmitter<void>()
  private dialog = inject(MatDialog)

  onRemoved() {
    const data: ConfirmationDialogModel = {
      title: "Potwierdzenie usunięcia historii ładowania",
      content: "Czy jesteś pewny, że chcesz usunąć całą historię ładowań",
      confirm: () => {
        this.chargingHistoryRemoved.emit()
      }
    }

    this.dialog.open(ConfirmationDialogComponent, {data})
  }
}
