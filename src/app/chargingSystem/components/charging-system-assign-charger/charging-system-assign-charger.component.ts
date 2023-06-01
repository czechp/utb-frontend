import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {
  ChargingSystemAssignChargerForm,
  createChargingSystemAssignChargerForm
} from "../../forms/charging-system-assign-charger.form";
import {ChargingSystemAssignChargerModel} from "../../models/charging-system-assign-charger.model";
import {StatementService} from "../../../service/statement.service";

@Component({
  selector: 'app-charging-system-assign-charger',
  templateUrl: './charging-system-assign-charger.component.html',
  styleUrls: ['./charging-system-assign-charger.component.css']
})
export class ChargingSystemAssignChargerComponent {
  @Input()
  chargingSystemId: number | undefined = undefined;
  positions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  assignChargerForm: FormGroup<ChargingSystemAssignChargerForm>;
  @Output()
  formSubmitted = new EventEmitter<ChargingSystemAssignChargerModel>();

  constructor(private statementService: StatementService) {
    this.assignChargerForm = createChargingSystemAssignChargerForm();
  }

  assignChargerClick() {
    if (this.assignChargerForm.valid)
      this.formSubmitted.emit({
        chargingSystemId: this.chargingSystemId as number,
        chargerPosition: this.assignChargerForm.get("chargerPosition")?.value as number
      });
    else
      this.statementService.dataNotCorrect();
  }
}
