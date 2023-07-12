import {Component} from '@angular/core';
import {CartHttpService} from "../../services/cart-http.service";
import {Observable} from "rxjs";
import {CartListModel} from "../../models/cart-list.model";

@Component({
  selector: 'app-carts-list-page',
  templateUrl: './carts-list-page.component.html',
  styleUrls: ['./carts-list-page.component.css']
})
export class CartsListPageComponent {
  carts$: Observable<CartListModel[]>;

  constructor(private cartHttpService: CartHttpService) {
    this.carts$ = this.cartHttpService.getCarts();
  }
}
