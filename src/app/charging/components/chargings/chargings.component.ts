import {Component, Input} from '@angular/core';
import {ChargingModel} from "../../models/charging.model";

@Component({
  selector: 'app-chargings',
  templateUrl: './chargings.component.html',
  styleUrls: ['./chargings.component.css']
})
export class ChargingsComponent {
  @Input()
  chargings: ChargingModel[] | null = [];
}
