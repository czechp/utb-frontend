import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChargingModel} from "../../models/charging.model";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../../component/confirmation-dialog/confirmation-dialog.component";
import {ConfirmationDialogModel} from "../../../component/confirmation-dialog/confirmation-dialog.model";
import {ChargingRemoveModel} from "../../models/charging-remove.model";

@Component({
  selector: 'app-chargings',
  templateUrl: './chargings.component.html',
  styleUrls: ['./chargings.component.css']
})
export class ChargingsComponent {
  @Input()
  chargings: ChargingModel[] | null = [];
  @Output()
  charingRemoved = new EventEmitter<ChargingRemoveModel>();

  constructor(private dialog: MatDialog) {
  }

  removeChargingModal(chargingId: number) {
    const dialogData: ConfirmationDialogModel = {
      title: "Potwierdzenie usuniecia ładownaia",
      content: "Czy na pewno chcesz usunąć to ładowanie?",
      confirm: () => {
        this.charingRemoved.emit({chargingId})
      }
    };
    this.dialog.open(ConfirmationDialogComponent, {data: dialogData});
  }
}
