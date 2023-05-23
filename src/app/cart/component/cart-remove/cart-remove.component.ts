import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogModel} from "../../../component/confirmation-dialog/confirmation-dialog.model";
import {ConfirmationDialogComponent} from "../../../component/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-cart-remove',
  templateUrl: './cart-remove.component.html',
  styleUrls: ['./cart-remove.component.css']
})
export class CartRemoveComponent {
  @Input()
  cartId: number | undefined = 0;
  @Output()
  formSubmitted = new EventEmitter<number>();

  constructor(private dialog: MatDialog) {
  }

  showRemoveDialog() {
    const dialogData: ConfirmationDialogModel = {
      title: "Usuwanie wózka",
      content: "Potwierdź usunięcie wózka",
      confirm: () => {
        this.formSubmitted.emit(this.cartId);
      }
    }
    this.dialog.open(ConfirmationDialogComponent, {data: dialogData});
  }
}
