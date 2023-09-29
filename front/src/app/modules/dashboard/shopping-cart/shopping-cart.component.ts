import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  // productList: Product[] | undefined;


  constructor(private shoppingCartService: ShoppingCartService) { }


  // Lista de ejemplo de productos
  // productList: Product[] = []
  //   {id: '1'; name: 'Mesa'; quantity: 30; categoria: 'Mesa'; tipoMaterial: 'Madera'; image: './img/mesa.png'; price: 4500; description: 'Mesa cuadrada'};
  //   {id: '2'; name: 'Silla'; quantity: 30; categoria: 'Silla'; tipoMaterial: 'plastico'; image: './img/silla.png'; price: 1500; description: 'Silla de plastico color blanco'};
  //   {id: '3'; name: 'Mesa Real'; quantity: 10; categoria: 'Mesa'; tipoMaterial: 'algorrobo'; image: './img/silla.png'; price: 6000; description: 'Mesa redonda de pata central '};
  //   {id: '4'; name: 'Silla'; quantity: 10; categoria: 'Silla'; tipoMaterial: 'plastico'; image: './img/silla.png'; price: 1500; description: 'Silla de plastico color blanco'};      
  //   {id: '5'; name: 'Silla'; quantity: 10; categoria: 'Silla'; tipoMaterial: 'plastico'; image: './img/silla.png'; price: 1500; description: 'Silla de plastico color blanco'};      
  //   {id: '6'; name: 'Silla'; quantity: 10; categoria: 'Silla'; tipoMaterial: 'plastico'; image: './img/silla.png'; price: 1500; description: 'Silla de plastico color blanco'};      
  //   {id: '7'; name: 'Silla'; quantity: 10; categoria: 'Silla'; tipoMaterial: 'plastico'; image: './img/silla.png'; price: 1500; description: 'Silla de plastico color blanco'}
  // ];

  get productList() {
    return this.shoppingCartService.productList;
  }

  // Método para calcular el total de los precios
  get totalPrice(): number {
    return this.shoppingCartService.totalPrice();
  }
  
  // Función para vaciar el carrito
  emptyCart(): void {
    this.shoppingCartService.clearCart();
  }

  // Función para eliminar un producto del carrito
  // removeProducto(index: number): void {
  //   this.cartList.splice(index, 1);
  // }

  // Función para eliminar todos los productos del carrito.
  // emptyCart(): void {
  //   this.cartList = [];
  // }

  ngOnInit(): void {
    // this.service.getProducts().subscribe((result: Product[]) => {
    //   this.cartList = result;
    // });
  }

}
