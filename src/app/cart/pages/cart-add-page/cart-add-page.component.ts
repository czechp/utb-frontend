import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CartAddForm, createCartAddForm} from "../../forms/cart-add.form";
import {CartAddModel} from "../../models/cart-add.model";
import {CartHttpService} from "../../services/cart-http.service";
import {StatementService} from "../../../service/statement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-add-page',
  templateUrl: './cart-add-page.component.html',
  styleUrls: ['./cart-add-page.component.css']
})
export class CartAddPageComponent {
  cartAddForm: FormGroup<CartAddForm>;

  constructor(private cartHttpService: CartHttpService, private statementService: StatementService, private router: Router) {
    this.cartAddForm = createCartAddForm();
  }

  addCart(cartAddModel: CartAddModel) {
    this.cartHttpService.addCart(cartAddModel)
      .subscribe({
        next: this.cartAdded
      })
  }

  private cartAdded = () => {
    this.statementService.publicInfo("Wózek został dodany");
    this.router.navigate(["/carts"]);
  }
}
