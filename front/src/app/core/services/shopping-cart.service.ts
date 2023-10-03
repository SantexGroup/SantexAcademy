import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { ApiService } from '../http/api.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  constructor(private _http: ApiService) { }

  private productList: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  public totalPrice(): number {
    let total: number = 0;
    for(let product of this.productList) {
      total += product.price;
    }
    return total;
  }

  addProducto(product: Product) {
    this.productList = [...this.productList, product];
    this.cart.next(this.productList);
  }

  // Función para eliminar un producto del carrito
  removeProduct(id: string | undefined) {
    const index: number = this.productList.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.productList.splice(index, 1); // Eliminar el producto del array
      this.cart.next(this.productList);
    }
  }

  // Función para vaciar el carrito
  clearCart() {
    this.productList = [];
    this.cart.next(this.productList);
  }

}
