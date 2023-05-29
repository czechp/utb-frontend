import {Component, Input} from '@angular/core';
import {CartModel} from "../../models/cart.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-carts-list',
  templateUrl: './carts-list.component.html',
  styleUrls: ['./carts-list.component.css']
})
export class CartsListComponent {
  @Input()
  carts: CartModel[] | null = null;

  constructor(private router: Router) {
  }

  navigateToDetails(id: number) {
    this.router.navigate(["/cart-details", id]);
  }
}
