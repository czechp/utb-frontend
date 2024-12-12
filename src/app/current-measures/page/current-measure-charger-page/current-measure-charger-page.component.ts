import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CurrentMeasureStateService} from "../../service/current-measure-state.service";
import {createCurrentMeasureGetForm} from "../../model/current-measure.model";

@Component({
  selector: 'app-current-measure-charger-page',
  templateUrl: './current-measure-charger-page.component.html',
  styleUrls: ['./current-measure-charger-page.component.css'],
  providers: [CurrentMeasureStateService]
})
export class CurrentMeasureChargerPageComponent {
    measures$ = this.stateService.measures$;
    measuresGetForm$ = this.stateService.measuresGetForm$;

    constructor(private stateService: CurrentMeasureStateService ) {

    }
}
