import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {CartModel} from "../../models/cart.model";
import {CartAssignDescriptionForm, createCartAssignDescriptionForm} from "../../forms/cart-assign-description.form";
import {FormGroup} from "@angular/forms";
import {CartAssignDescriptionModel} from "../../models/cart-assign-description.model";

@Component({
  selector: 'app-cart-modify-description',
  templateUrl: './cart-modify-description.component.html',
  styleUrls: ['./cart-modify-description.component.css']
})
export class CartModifyDescriptionComponent implements OnChanges {
  @Input()
  cart: CartModel | null = null;
  @Output()
  descriptionAssigned = new EventEmitter<CartAssignDescriptionModel>;
  assignDescriptionForm: FormGroup<CartAssignDescriptionForm>;

  constructor() {
    this.assignDescriptionForm = createCartAssignDescriptionForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.assignDescriptionForm.setValue({description: changes["cart"].currentValue.description});
  }

  descriptionAssignedClick() {
    this.descriptionAssigned.emit({
      cartId: this.cart?.id as number,
      description: this.assignDescriptionForm.get("description")?.value as string
    });
  }
}
