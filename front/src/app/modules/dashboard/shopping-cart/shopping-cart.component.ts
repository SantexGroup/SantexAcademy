import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  
  productList: Product[] | undefined = [];

  total$: Observable<number>;
  constructor(private shoppingCartService: ShoppingCartService) { 
    this.total$ = this.shoppingCartService.cart$
      .pipe(
        map(products => products.length)
      );
  }

  // Método para calcular el total de los precios
  get totalPrice(): number {
    return this.shoppingCartService.totalPrice();
  }
  
  // Función para vaciar el carrito
  emptyCart(): void {
    this.shoppingCartService.clearCart();
  }


  ngOnInit(): void {
    this.shoppingCartService.cart$.subscribe(items => {
      this.productList = items;
    });
  }

}
