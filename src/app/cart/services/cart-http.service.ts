import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../../configuration/URL";
import {CartModel} from "../models/cart.model";
import {share} from "rxjs";
import {CartAddModel} from "../models/cart-add.model";
import {CartListModel} from "../models/cart-list.model";

@Injectable({
  providedIn: 'root'
})
export class CartHttpService {

  constructor(private httpClient: HttpClient) {
  }

  public getCarts() {
    return this.httpClient.get<CartListModel[]>(`${BACKEND_URL}/carts`).pipe(share());
  }

  public getCartById(cartId: number) {
    return this.httpClient.get<CartModel>(`${BACKEND_URL}/carts/${cartId}`).pipe(share());
  }

  public removeCart(cartId: number) {
    return this.httpClient.delete(`${BACKEND_URL}/carts/${cartId}`).pipe(share());
  }

  addCart(cartAddModel: CartAddModel) {
    return this.httpClient.post(`${BACKEND_URL}/carts`, cartAddModel);
  }
}
