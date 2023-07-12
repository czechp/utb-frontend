import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {CartListModel} from "../../models/cart-list.model";

@Component({
  selector: 'app-carts-list',
  templateUrl: './carts-list.component.html',
  styleUrls: ['./carts-list.component.css']
})
export class CartsListComponent {
  @Input()
  carts: CartListModel[] | null = null;

  constructor(private router: Router) {
  }

  navigateToDetails(id: number) {
    this.router.navigate(["/cart-details", id]);
  }
}
