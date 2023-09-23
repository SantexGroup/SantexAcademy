import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';
import { BackServiceService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  // Lista de ejemplo de productos
   productList: Product[] = []
  //   {id: '1', name: 'Mesa', quantity: 30, categoria: 'Mesa', tipoMaterial: 'Madera', image: './img/mesa.png', price: 4500, description: 'Mesa cuadrada'},
  //   {id: '2', name: 'Silla', quantity: 30, categoria: 'Silla', tipoMaterial: 'plastico', image: './img/silla.png', price: 1500, description: 'Silla de plastico color blanco'},
  //   {id: '3', name: 'Mesa Real', quantity: 10, categoria: 'Mesa', tipoMaterial: 'algorrobo', image: './img/silla.png', price: 6000, description: 'Mesa redonda de pata central '},
  //   {id: '4', name: 'Silla', quantity: 10, categoria: 'Silla', tipoMaterial: 'plastico', image: './img/silla.png', price: 1500, description: 'Silla de plastico color blanco'},      
  //   {id: '5', name: 'Silla', quantity: 10, categoria: 'Silla', tipoMaterial: 'plastico', image: './img/silla.png', price: 1500, description: 'Silla de plastico color blanco'},      
  //   {id: '6', name: 'Silla', quantity: 10, categoria: 'Silla', tipoMaterial: 'plastico', image: './img/silla.png', price: 1500, description: 'Silla de plastico color blanco'},      
  //   {id: '7', name: 'Silla', quantity: 10, categoria: 'Silla', tipoMaterial: 'plastico', image: './img/silla.png', price: 1500, description: 'Silla de plastico color blanco'},      
  // ];

  constructor(private service:BackServiceService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((result) => {
      this.productList = result;
    });
  }

}
