import { Component, OnInit } from '@angular/core';

export interface Product {
  nombreProd: string;
  cantidad: number;
  categoria: string;
  tipoMaterial: string;
  urlImagen: string;
  precio: number;
  descripcion: string;
};

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  // Lista de ejemplo de productos
  productList: Product[] = [
    {nombreProd: 'Mesa', cantidad: 30, categoria: 'Mesa', tipoMaterial: 'Madera', urlImagen: './img/mesa.png', precio: 4500, descripcion: 'Mesa cuadrada'},
    {nombreProd: 'Silla', cantidad: 30, categoria: 'Silla', tipoMaterial: 'plastico', urlImagen: './img/silla.png', precio: 1500, descripcion: 'Silla de plastico color blanco'},
    {nombreProd: 'Mesa Real', cantidad: 10, categoria: 'Mesa', tipoMaterial: 'algorrobo', urlImagen: './img/silla.png', precio: 6000, descripcion: 'Mesa redonda de pata central '},
    {nombreProd: 'Silla', cantidad: 10, categoria: 'Silla', tipoMaterial: 'plastico', urlImagen: './img/silla.png', precio: 1500, descripcion: 'Silla de plastico color blanco'},      
    {nombreProd: 'Silla', cantidad: 10, categoria: 'Silla', tipoMaterial: 'plastico', urlImagen: './img/silla.png', precio: 1500, descripcion: 'Silla de plastico color blanco'},      
    {nombreProd: 'Silla', cantidad: 10, categoria: 'Silla', tipoMaterial: 'plastico', urlImagen: './img/silla.png', precio: 1500, descripcion: 'Silla de plastico color blanco'},      
    {nombreProd: 'Silla', cantidad: 10, categoria: 'Silla', tipoMaterial: 'plastico', urlImagen: './img/silla.png', precio: 1500, descripcion: 'Silla de plastico color blanco'},      
  ];

  total(): number {
    let total: number = 0;
    for(let product of this.productList) {
      total += product.precio;
    }
    return total;
  }

  // Función para eliminar un producto del carrito
  removeProducto(index: number): void {
    this.productList.splice(index, 1);
  }

  // Función para eliminar todos los productos del carrito.
  emptyCart(): void {
    this.productList = [];
  }

  ngOnInit(): void {
  }

}
