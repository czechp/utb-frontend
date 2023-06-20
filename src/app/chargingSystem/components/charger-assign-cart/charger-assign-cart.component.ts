import {Component, EventEmitter, Output} from '@angular/core';
import {CartModel} from "../../../cart/models/cart.model";
import {Observable, tap} from "rxjs";
import {CartHttpService} from "../../../cart/services/cart-http.service";
import {FormGroup} from "@angular/forms";
import {ChargerAssignCartForm, createChargerAssignCartForm} from "../../forms/charger-assign-cart.form";

@Component({
  selector: 'app-charger-assign-cart',
  templateUrl: './charger-assign-cart.component.html',
  styleUrls: ['./charger-assign-cart.component.css']
})
export class ChargerAssignCartComponent {
  carts$: Observable<CartModel[]>;
  assignCartForm: FormGroup<ChargerAssignCartForm>;
  @Output()
  cartAssigned = new EventEmitter<number>();

  constructor(private cartHttpService: CartHttpService) {
    this.assignCartForm = createChargerAssignCartForm();
    this.carts$ = cartHttpService.getCarts()
      .pipe(
        tap((carts => {
          this.assignCartForm.get("cartId")?.setValue(carts.length > 0 ? carts[0].id : 0)
        }))
      )
  }

  assignCart() {
    this.cartAssigned.emit(this.assignCartForm.get("cartId")?.value as number);
  }
}
