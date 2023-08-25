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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Lista de ejemplo de productos
  productList: Product[] = [
    {nombreProd: 'Mesa', cantidad: 30, categoria: 'Mesa', tipoMaterial: 'Madera', urlImagen: './img/mesa.png', precio: 4500, descripcion: 'Mesa cuadrada'},
    {nombreProd: 'Silla', cantidad: 30, categoria: 'Silla', tipoMaterial: 'plastico', urlImagen: './img/silla.png', precio: 1500, descripcion: 'Silla de plastico color blanco'},
    {nombreProd: 'Mesa Real', cantidad: 10, categoria: 'Mesa', tipoMaterial: 'algorrobo', urlImagen: './img/silla.png', precio: 6000, descripcion: 'Mesa redonda de pata central '},
    {nombreProd: 'Silla', cantidad: 10, categoria: 'Silla', tipoMaterial: 'plastico', urlImagen: './img/silla.png', precio: 1500, descripcion: 'Silla de plastico color blanco'},      
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
