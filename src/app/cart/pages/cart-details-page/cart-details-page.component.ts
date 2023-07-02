import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {CartModel} from "../../models/cart.model";
import {CartHttpService} from "../../services/cart-http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StatementService} from "../../../service/statement.service";
import {ChargingHttpService} from "../../../charging/services/charging-http.service";
import {ChargingModel} from "../../../charging/models/charging.model";
import {ChargingRemoveModel} from "../../../charging/models/charging-remove.model";

@Component({
  selector: 'app-cart-details-page',
  templateUrl: './cart-details-page.component.html',
  styleUrls: ['./cart-details-page.component.css']
})
export class CartDetailsPageComponent {
  cart$: Observable<CartModel> | undefined;
  chargings$: Observable<ChargingModel[]> | undefined;
  cartId: number;

  constructor(private cartHttpService: CartHttpService,
              private chargingHttpService: ChargingHttpService,
              private activatedRoute: ActivatedRoute,
              private statementService: StatementService,
              private router: Router
  ) {
    this.cartId = activatedRoute.snapshot.params["id"];
    this.getCart();
    this.getChargings();
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
    this.chargings$ = this.chargingHttpService.getChargingsByCartId(this.cartId);
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
}
