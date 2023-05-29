import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {CartModel} from "../../models/cart.model";
import {CartHttpService} from "../../services/cart-http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StatementService} from "../../../service/statement.service";

@Component({
  selector: 'app-cart-details-page',
  templateUrl: './cart-details-page.component.html',
  styleUrls: ['./cart-details-page.component.css']
})
export class CartDetailsPageComponent {
  cart$: Observable<CartModel>;

  constructor(private cartHttpService: CartHttpService,
              private activatedRoute: ActivatedRoute,
              private statementService: StatementService,
              private router: Router
  ) {
    const cartId = activatedRoute.snapshot.params["id"];
    this.cart$ = this.cartHttpService.getCartById(cartId);
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
}
