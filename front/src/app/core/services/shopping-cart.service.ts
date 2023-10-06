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
  private ProductUrl:string ="http://localhost:4001/carrito/"
  public totalPrice(): number {
    let total: number = 0;
    for(let product of this.productList) {
      total += product.price;
    }
    return total;
  }

  addProducto(product: Product) {
    
    let url = this.ProductUrl + "add/" + 1 //1 hace referencia a user id
      return this._http.put(url, product).subscribe()
  }
  obtenerCarrito(id : string): Observable<any>{ // id del usuario
    return this._http.get(this.ProductUrl+id);
  }

  // Función para eliminar un producto del carrito
  removeProduct(id: string | undefined): Observable<any>{
    let url = this.ProductUrl + "/deleteProd/" + "1"
    let body = {
      id: id
    }
    return this._http.put(url,body);
  }

  // Función para vaciar el carrito
  clearCart() {//se borra el carrito hay que enviar usuario
    let id = "1"
    return this._http.delete(this.ProductUrl+id);
  }

}
