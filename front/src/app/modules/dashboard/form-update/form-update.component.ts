import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})

export class FormUpdateComponent implements OnInit {

  // Creamos una lista de productos como ejemplo
  productList: Product[] = [
    {nombreProd: 'Mesa', cantidad: 30, categoria: 'Mesa', tipoMaterial: 'Madera', urlImagen: './img/mesa.png', precio: 4500, descripcion: 'Mesa cuadrada'},
    {nombreProd: 'Silla', cantidad: 30, categoria: 'Silla', tipoMaterial: 'plastico', urlImagen: './img/silla.png', precio: 1500, descripcion: 'Silla de plastico color blanco'},
  ];
  
  searchForm = new FormGroup({
    buscarProducto: new FormControl('', Validators.required)
  })
  
  myForm = new FormGroup({
    nombreProducto: new FormControl('', [Validators.required]),
    cantidad: new FormControl('', [Validators.required, ]),
    categoria: new FormControl('', [Validators.required]),
    tipoMaterial: new FormControl('', [Validators.required]),
    urlImagen: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required])
  });

  
  foundProduct: boolean | undefined;
  noFoundProduct: boolean | undefined;
  query: Product | undefined;
  
  // Función para buscar un producto
  searchProduct() {
        
    this.query = this.productList.find(product => product.nombreProd.toLowerCase() === this.searchForm.get('buscarProducto')?.value?.toLowerCase());
    
    console.log('El producto se encontro: ', this.query)
    if (this.query) {
      this.foundProduct = true;
      this.noFoundProduct = false;

      // Agregamos los valores del producto al formulario
      this.myForm.patchValue({
        nombreProducto: this.query?.nombreProd,
        cantidad: this.query?.cantidad.toString(),
        categoria: this.query?.categoria,
        tipoMaterial: this.query?.tipoMaterial,
        urlImagen: this.query?.urlImagen,
        precio: this.query?.precio.toString(),
        descripcion: this.query?.descripcion
      });
    } else {
      this.foundProduct = false;
      this.noFoundProduct = true;
    }
  }
  
  ngOnInit(): void {
  }

  // Función para actualizar un producto
  updateProduct() {
    // Resetea el formulario para limpiar los inputs
    this.myForm.reset();
  } 
  
  
}

