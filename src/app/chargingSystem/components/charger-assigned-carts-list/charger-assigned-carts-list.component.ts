import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AssignedCartModel} from "../../models/charger-with-carts.model";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-charger-assigned-carts-list',
  templateUrl: './charger-assigned-carts-list.component.html',
  styleUrls: ['./charger-assigned-carts-list.component.css']
})
export class ChargerAssignedCartsListComponent {
  @Input()
  assignedCarts: AssignedCartModel[] | undefined = [];
  @Output()
  cartDetached = new EventEmitter<number>();
  remove = faTrash;

  detachCart(cartId: number) {
    this.cartDetached.emit(cartId);
  }
}
