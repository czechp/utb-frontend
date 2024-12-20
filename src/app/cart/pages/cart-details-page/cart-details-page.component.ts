import {Component} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CartModel} from "../../models/cart.model";
import {CartHttpService} from "../../services/cart-http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StatementService} from "../../../service/statement.service";
import {ChargingHttpService} from "../../../charging/services/charging-http.service";
import {ChargingModel} from "../../../charging/models/charging.model";
import {ChargingRemoveModel} from "../../../charging/models/charging-remove.model";
import {CartAssignDescriptionModel} from "../../models/cart-assign-description.model";
import {ChargingFilterModel} from "../../../charging/models/charing-filter.model";

@Component({
  selector: 'app-cart-details-page',
  templateUrl: './cart-details-page.component.html',
  styleUrls: ['./cart-details-page.component.css']
})
export class CartDetailsPageComponent {
  cart$: Observable<CartModel> | undefined;
  chargings$ = new BehaviorSubject<ChargingModel[]>([]);
  cartId: number;
  activeTab = 0;
  assignedChargers$: Observable<string[]> | undefined;

  constructor(private cartHttpService: CartHttpService,
              private chargingHttpService: ChargingHttpService,
              private activatedRoute: ActivatedRoute,
              private statementService: StatementService,
              private router: Router
  ) {
    this.cartId = activatedRoute.snapshot.params["id"];
    this.getCart();
    this.getChargings();
    this.getAssignedChargers();
  }

  removeChargingRequest(chargingRemoveModel: ChargingRemoveModel) {
    this.chargingHttpService.removeCharging(chargingRemoveModel)
      .subscribe({
        next: () => {
          this.getChargings();
          this.statementService.publicInfo("Ładowanie zostało usunięte");
        }
      })
  }

  private getChargings() {
    this.chargingHttpService.getChargingsByCartId(this.cartId)
      .subscribe(result=>this.chargings$.next(result));
  }

  removeCart(cartId: number) {
    this.cartHttpService.removeCart(cartId)
      .subscribe({
        next: this.cartRemoved()
      })
  }

  private cartRemoved() {
    return () => {
      this.statementService.publicInfo("Wózek został usunięty");
      this.router.navigate(["/carts"]);
    };
  }

  private getCart() {
    this.cart$ = this.cartHttpService.getCartById(this.cartId);
  }

  assignDescriptionRequest(cartAssignDescriptionModel: CartAssignDescriptionModel) {
    this.cartHttpService.assignDescription(cartAssignDescriptionModel)
      .subscribe({
        next: () => {
          this.statementService.publicInfo("Opis został zmieniony");
          this.getCart();
          this.activeTab = 0;
        }
      });
  }

  removeChargingHistory(timeSpan: ChargingFilterModel) {
    this.chargingHttpService.removeChargingByCartIdInTimeSpan(this.cartId, timeSpan)
      .subscribe(()=>{
        this.getChargings();
        this.statementService.publicInfo("Ładowania w wyznaczonym zakresie zostały usunięte");
      })
  }

  private getAssignedChargers() {
    this.assignedChargers$ = this.cartHttpService.getAssignedChargers(this.cartId);
  }

  timeRangeSelected(timeSpan: ChargingFilterModel) {
    this.chargingHttpService.getChargingsByCartIdInTimeSpan(this.cartId, timeSpan)
    .subscribe(result => this.chargings$.next(result));
  }

  clearTimeFilter() {
    this.getChargings();
  }
}
