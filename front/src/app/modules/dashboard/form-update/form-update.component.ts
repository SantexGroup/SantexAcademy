import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { BackServiceService } from 'src/app/services/back-service.service';


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

  //variable id y selectProduct
  id : string | undefined;
  selectedProduct: Product | undefined;
  

  constructor(
    private backService: BackServiceService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    //private dataRouter: DataRouter,
  ) {
  }

  ngOnInit() {
    
    this.activateRoute.paramMap.pipe(
      switchMap(
        (params: ParamMap) => {
          let id: string | null = params.get('id');
          if (id == "") {
            return of(undefined);
          }
          return this.backService.getProduct(String(params.get('id')));
        }
      )
    ).subscribe(product => {
      // Asigna el producto obtenido a selectedProduct
      this.selectedProduct = product;
  
      // Si se encontró un producto, actualiza el formulario
      if (product) {
        console.log('Producto ', this.selectedProduct);
        this.myForm.patchValue({
          nombreProducto: product.nombreProd,
          cantidad: product.cantidad ? product.cantidad.toString(): '',
          categoria: product.categoria,
          tipoMaterial: product.tipoMaterial,
          urlImagen: product.urlImagen,
          precio: product.precio ? product.precio.toString(): '',
          descripcion: product.descripcion
        });
      }else {
        // El producto no se encontró o no es válido, puedes manejar este caso aquí
        console.log('El producto no se encontró o no es válido.');

      }
    });
  }
  
  
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
  

  // Función para actualizar un producto
  updateProduct() {
    console.log('Producto Actualizado', this.myForm.value)
    
    // Resetea el formulario para limpiar los inputs
    this.myForm.reset();
  } 
  
  
}
// function buscarProducto() {
  //   throw new Error('Function not implemented.');
  // }

