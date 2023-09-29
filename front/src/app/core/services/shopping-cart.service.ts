import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  static productList: any;
  
  constructor(private _http: ApiService) { }
  
  // Lista de ejemplo de productos
  productList: Product[] = [
    {id: '1', name: 'Mesa', quantity: 30, categoria: [1], tipoMaterial: 'Madera', image: './img/mesa.png', price: 4500, description: 'Mesa cuadrada'},
    {id: '2', name: 'Silla', quantity: 30, categoria: [2], tipoMaterial: 'plastico', image: './img/silla.png', price: 1500, description: 'Silla de plastico color blanco'},
    {id: '3', name: 'Mesa Real', quantity: 10, categoria: [1], tipoMaterial: 'algorrobo', image: './img/silla.png', price: 6000, description: 'Mesa redonda de pata central '},
    {id: '4', name: 'Silla', quantity: 10, categoria: [2], tipoMaterial: 'plastico', image: './img/silla.png', price: 1500, description: 'Silla de plastico color blanco'},      
    {id: '5', name: 'Silla', quantity: 10, categoria: [2], tipoMaterial: 'plastico', image: './img/silla.png', price: 1500, description: 'Silla de plastico color blanco'},      
    {id: '6', name: 'Silla', quantity: 10, categoria: [2], tipoMaterial: 'plastico', image: './img/silla.png', price: 1500, description: 'Silla de plastico color blanco'},      
    {id: '7', name: 'Silla', quantity: 10, categoria: [2], tipoMaterial: 'plastico', image: './img/silla.png', price: 2500, description: 'Silla de plastico color blanco'}
  ];

  public totalPrice(): number {
    let total: number = 0;
    for(let product of this.productList) {
      total += product.price;
    }
    return total;
  }

  // Función para eliminar un producto del carrito
  removeProduct(id: string | undefined) {
    const index: number = this.productList.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.productList.splice(index, 1); // Eliminar el producto del array
    }
  }

  // Función para vaciar el carrito
  clearCart() {
    this.productList = [];
  }

}
