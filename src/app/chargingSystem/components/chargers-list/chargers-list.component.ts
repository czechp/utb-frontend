import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChargerModel} from "../../models/charging-system.model";
import {faCircleCheck, faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import {MatDialog} from "@angular/material/dialog";
import {ChargerDetailsComponent} from "../charger-details/charger-details.component";

export interface ChargerModalData {
  chargerId: number;
  close: () => void
}

@Component({
  selector: 'app-chargers-list',
  templateUrl: './chargers-list.component.html',
  styleUrls: ['./chargers-list.component.css']
})
export class ChargersListComponent {
  @Input()
  chargers: ChargerModel[] | undefined = [];
  okIcon = faCircleCheck;
  errorIcon = faCircleExclamation;

  @Output()
  chargerRemoved = new EventEmitter<void>();

  constructor(private dialog: MatDialog) {
  }

  openDetailsDialog(id: number) {
    const modalData: ChargerModalData = {
      chargerId: id,
      close: () => {
        this.chargerRemoved.emit();
        this.dialog.closeAll();
      }
    }
    this.dialog.open(ChargerDetailsComponent, {data: modalData});
  }
}
