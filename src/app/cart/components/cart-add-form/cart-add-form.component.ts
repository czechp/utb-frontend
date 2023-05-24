import {Component, EventEmitter, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CartAddForm, createCartAddForm} from "../../forms/cart-add.form";
import {StatementService} from "../../../service/statement.service";
import {ValidationMessages} from "../../../configuration/ValidationMessages";
import {CartAddModel} from "../../models/cart-add.model";

@Component({
  selector: 'app-cart-add-form',
  templateUrl: './cart-add-form.component.html',
  styleUrls: ['./cart-add-form.component.css']
})
export class CartAddFormComponent {
  cartAddForm: FormGroup<CartAddForm>;
  @Output()
  formSubmitted = new EventEmitter<CartAddModel>;
  protected readonly ValidationMessages = ValidationMessages;

  constructor(private statementService: StatementService) {
    this.cartAddForm = createCartAddForm();
  }

  cartAddClicked() {
    if (this.cartAddForm.valid)
      this.formSubmitted.emit({
        umupNumber: this.cartAddForm.get("umupNumber")?.value as string,
        description: this.cartAddForm.get("description")?.value as string
      });
    else this.statementService.dataNotCorrect();
  }
}
