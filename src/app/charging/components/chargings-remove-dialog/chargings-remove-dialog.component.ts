import {Component, Inject} from '@angular/core';
import {ChargingFilterModel, createChargingFilterForm} from "../../models/charing-filter.model";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export type ChargingRemoveDialogAction = {
  confirm: (span: ChargingFilterModel) => void;
}

@Component({
  selector: 'app-chargings-remove-dialog',
  templateUrl: './chargings-remove-dialog.component.html',
  styleUrls: ['./chargings-remove-dialog.component.css']
})
export class ChargingsRemoveDialogComponent {
  removeChargingsForm = createChargingFilterForm();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ChargingRemoveDialogAction) {
  }

  charginsRemoved() {
    const span: ChargingFilterModel = {
      from: this.removeChargingsForm.get("from")?.value as string,
      to: this.removeChargingsForm.get("to")?.value as string
    };
    this.data.confirm(span);
  }
}
