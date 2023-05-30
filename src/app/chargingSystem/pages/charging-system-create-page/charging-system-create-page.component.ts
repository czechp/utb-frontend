import {Component} from '@angular/core';
import {ChargingSystemCreateModel} from "../../models/charging-system-create.model";
import {ChargingSystemHttpService} from "../../services/charging-system-http.service";
import {StatementService} from "../../../service/statement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-charging-system-create-page',
  templateUrl: './charging-system-create-page.component.html',
  styleUrls: ['./charging-system-create-page.component.css']
})
export class ChargingSystemCreatePageComponent {
  constructor(private chargingSystemHttpService: ChargingSystemHttpService,
              private statementService: StatementService,
              private router: Router
  ) {
  }

  createChargingSystem(chargingSystemCreateModel: ChargingSystemCreateModel) {
    this.chargingSystemHttpService.createChargingSystem(chargingSystemCreateModel)
      .subscribe({
        next: () => {
          this.statementService.publicInfo("Nowy system został dodany");
          this.router.navigate(["/"]);
        }
      })
  }
}
