import {Injectable} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CurrentMeasureHttpService} from "./current-measure-http.service";
import {BehaviorSubject} from "rxjs";
import {
  createCurrentMeasureGetForm,
  currentMeasureGetFormToModel,
  CurrentMeasureModel
} from "../model/current-measure.model";

@Injectable()
export class CurrentMeasureStateService {
  measures$ = new BehaviorSubject<CurrentMeasureModel[]>([]);
  measuresGetForm = createCurrentMeasureGetForm();
  measuresGetForm$ = new BehaviorSubject(this.measuresGetForm);

  private chargerId: number;

  constructor(private route: ActivatedRoute, private httpClient: CurrentMeasureHttpService) {
    this.chargerId = route.snapshot.params["id"];
    this.getMeasures();
    this.measuresGetForm.valueChanges.subscribe(value => {
      this.getMeasures();
    })
  }

  private getMeasures() {
    const getModel = currentMeasureGetFormToModel(this.chargerId, this.measuresGetForm);
    this.httpClient.getMeasures(getModel).subscribe(measures => this.measures$.next(measures))
  }
}
