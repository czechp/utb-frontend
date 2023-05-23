import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared.module";
import {CartsListPageComponent} from './pages/carts-list-page/carts-list-page.component';
import {CartsListComponent} from './component/carts-list/carts-list.component';
import {CartDetailsPageComponent} from './pages/cart-details-page/cart-details-page.component';
import {CartInfoComponent} from './component/cart-info/cart-info.component';
import {CartRemoveComponent} from './component/cart-remove/cart-remove.component';


@NgModule({
  declarations: [
    CartsListPageComponent,
    CartsListComponent,
    CartDetailsPageComponent,
    CartInfoComponent,
    CartRemoveComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartModule {
}
