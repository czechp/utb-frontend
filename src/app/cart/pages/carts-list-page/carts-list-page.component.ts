import {Component} from '@angular/core';
import {CartHttpService} from "../../service/cart-http.service";
import {Observable} from "rxjs";
import {CartModel} from "../../model/cart.model";

@Component({
  selector: 'app-carts-list-page',
  templateUrl: './carts-list-page.component.html',
  styleUrls: ['./carts-list-page.component.css']
})
export class CartsListPageComponent {
  carts$: Observable<CartModel[]>;

  constructor(private cartHttpService: CartHttpService) {
    this.carts$ = this.cartHttpService.getCarts();
  }
}
