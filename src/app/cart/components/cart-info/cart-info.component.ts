import {Component, Input} from '@angular/core';
import {CartModel} from "../../models/cart.model";

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css']
})
export class CartInfoComponent {
  @Input()
  cart: CartModel | null = null;
  @Input()
  assignedChargers: string[] | null = null;
}
