import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { BackServiceService } from 'src/app/services/back-service.service';
import { Product } from 'src/app/core/interfaces/product';
@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})

export class FormUpdateComponent implements OnInit {

  // Creamos una lista de productos como ejemplo

  
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

  
  foundProduct: boolean = false;
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
          return  this.backService.getProduct(String(params.get('id')));
        }
      )
    ).subscribe(product => {
      // Asigna el producto obtenido a selectedProduct
      this.selectedProduct = product;
      console.log(this.selectedProduct)
      // Si se encontró un producto,  se muestra el formulario con los valores del producto
      if (product) {
        this.myForm.patchValue({
          nombreProducto: product.name,
          cantidad: product.quantity ? product.quantity.toString(): '',
          categoria: product.categoria,
          tipoMaterial: product.tipoMaterial,
          urlImagen: product.image,
          precio: product.price ? product.price.toString(): '',
          descripcion: product.description
        });
        this.foundProduct = true;
        console.log(this.foundProduct)
      }else {
        // El producto no se encontró o no es válido, puedes manejar este caso aquí
        alert('El producto no se encontrón o no es válido');
      }
    });

 
  }
  // Función para actualizar un producto
  updateProduct() {
    console.log('Producto Actualizado', this.myForm.value)
    
    // Resetea el formulario para limpiar los inputs
    this.myForm.reset();
  } 
  
  
}
  // Función para buscar un producto
  // searchProduct() {
        
  //   this.query = this.productList.find(product => product.nombreProd.toLowerCase() === this.searchForm.get('buscarProducto')?.value?.toLowerCase());
    
  //   console.log('El producto se encontro: ', this.query)
  //   if (this.query) {
  //     this.foundProduct = true;
  //     this.noFoundProduct = false;

  //     // Agregamos los valores del producto al formulario
  //     this.myForm.patchValue({
  //       nombreProducto: this.query?.nombreProd,
  //       cantidad: this.query?.cantidad.toString(),
  //       categoria: this.query?.categoria,
  //       tipoMaterial: this.query?.tipoMaterial,
  //       urlImagen: this.query?.urlImagen,
  //       precio: this.query?.precio.toString(),
  //       descripcion: this.query?.descripcion
  //     });
  //   } else {
  //     this.foundProduct = false;
  //     this.noFoundProduct = true;
  //   }
  // }

