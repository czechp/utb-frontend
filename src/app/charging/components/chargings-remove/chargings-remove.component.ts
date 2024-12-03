import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  ChargingRemoveDialogAction,
  ChargingsRemoveDialogComponent
} from "../chargings-remove-dialog/chargings-remove-dialog.component";
import {ChargingFilterModel} from "../../models/charing-filter.model";

@Component({
  selector: 'app-chargings-remove',
  templateUrl: './chargings-remove.component.html',
  styleUrls: ['./chargings-remove.component.css']
})
export class ChargingsRemoveComponent {
  @Output()
  chargingHistoryRemoved = new EventEmitter<ChargingFilterModel>()
  private dialog = inject(MatDialog)

  onRemoved() {
    const data: ChargingRemoveDialogAction = {
      confirm: (span: ChargingFilterModel) => {
        this.chargingHistoryRemoved.emit(span);
        this.dialog.closeAll();
      }
    }

    this.dialog.open(ChargingsRemoveDialogComponent, {data})
  }
}
