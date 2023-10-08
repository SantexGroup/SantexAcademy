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
  
  productList: Product[] = new Array<Product>();
  p!:Product 
  
  constructor(private shoppingCartService: ShoppingCartService) { 
    
  }

  // Método para calcular el total de los precios
  totalPrice: number = 0;
  
  // Función para vaciar el carrito
  emptyCart(): void {
    this.shoppingCartService.clearCart().subscribe();
    this.productList = [];
  }


  ngOnInit(): void {
    this.shoppingCartService.obtenerCarrito("1").subscribe(data =>
      {
       let lista = data[0].Products;
       lista.forEach((e: any) => {
        this.totalPrice = this.totalPrice + e.price
         this.p = e
         this.productList.push(this.p);
       })
     })     
  }
}
