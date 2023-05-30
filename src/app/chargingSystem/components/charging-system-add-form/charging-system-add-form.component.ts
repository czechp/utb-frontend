import {Component, EventEmitter, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ChargingSystemCreateForm, createChargingSystemCreateForm} from "../../forms/charging-system-create.form";
import {ValidationMessages} from "../../../configuration/ValidationMessages";
import {StatementService} from "../../../service/statement.service";
import {ChargingSystemCreateModel} from "../../models/charging-system-create.model";

@Component({
  selector: 'app-charging-system-add-form',
  templateUrl: './charging-system-add-form.component.html',
  styleUrls: ['./charging-system-add-form.component.css']
})
export class ChargingSystemAddFormComponent {
  chargingSystemCreateForm: FormGroup<ChargingSystemCreateForm>
  @Output()
  formSubmitted = new EventEmitter<ChargingSystemCreateModel>();
  protected readonly ValidationMessages = ValidationMessages;

  constructor(private statementService: StatementService) {
    this.chargingSystemCreateForm = createChargingSystemCreateForm();
  }

  formSubmittedClick() {
    if (this.chargingSystemCreateForm.valid) {
      this.formSubmitted.emit({
        name: this.chargingSystemCreateForm.get("name")?.value as string,
        plcAddress: this.chargingSystemCreateForm.get("plcAddress")?.value as string,
        networkMask: this.chargingSystemCreateForm.get("networkMask")?.value as string
      });
    } else
      this.statementService.dataNotCorrect();
  }
}
