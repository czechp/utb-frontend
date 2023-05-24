import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared.module";
import {CartsListPageComponent} from './pages/carts-list-page/carts-list-page.component';
import {CartsListComponent} from './components/carts-list/carts-list.component';
import {CartDetailsPageComponent} from './pages/cart-details-page/cart-details-page.component';
import {CartInfoComponent} from './components/cart-info/cart-info.component';
import {CartRemoveComponent} from './components/cart-remove/cart-remove.component';
import {CartAddPageComponent} from './pages/cart-add-page/cart-add-page.component';
import {CartAddFormComponent} from './components/cart-add-form/cart-add-form.component';


@NgModule({
  declarations: [
    CartsListPageComponent,
    CartsListComponent,
    CartDetailsPageComponent,
    CartInfoComponent,
    CartRemoveComponent,
    CartAddPageComponent,
    CartAddFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartModule {
}
