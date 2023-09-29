import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { BackServiceService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css'],
})
export class FormUpdateComponent implements OnInit {
  categorias : Categoria[] = new Array();
 


  constructor(
    private backService: BackServiceService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private categoriaService:CategoriaService
    //private dataRouter: DataRouter,
  ) {
       

  }


  // Creamos una lista de productos como ejemplo

  searchForm = new FormGroup({
    buscarProducto: new FormControl('', Validators.required),
  });

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    quantity: new FormControl(0, [Validators.required]),
    categories: new FormControl('', [Validators.required]),
    tipoMaterial: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });


  foundProduct: boolean = false;
  noFoundProduct: boolean | undefined;
  query: Product | undefined;

  //variable id y selectProduct

  selectedProduct: Product | undefined;
  



  ngOnInit() {
     
    this.activateRoute.paramMap.pipe(
      switchMap(
        (params: ParamMap) => {
          let id = params.get('id');
          if (id == "") {
            return of(undefined);
          }
          return  this.backService.getProduct(String(params.get('id')));
        }
      )
    ).subscribe(product => {
      // Asigna el producto obtenido a selectedProduct
      this.selectedProduct = product;
      console.log(product.quantity)
      //console.log(this.selectedProduct)
      // Si se encontró un producto,  se muestra el formulario con los valores del producto
      if (product) {
        this.myForm.patchValue({
          name: product.name,
          quantity: product.quantity,
          categories: product.categoria,
          tipoMaterial: product.tipoMaterial,
          image: product.image,
          price: product.price,
          description: product.description,
        });
        //console.log(this.myForm.value)
      
        this.foundProduct = true;
        //console.log(this.foundProduct)


        
      }else {
        // El producto no se encontró o no es válido, puedes manejar este caso aquí
        alert('El producto no se encontrón o no es válido');
      }
          this.categoriaService.getCategories().subscribe((result) => {
      this.categorias = result;
    });
    });

 
  }
  // Función para actualizar un producto
  selectImage($event:any){
    this.myForm.patchValue({image:$event.target.files[0]});
  }

  updateProduct() {
    //console.log(this.myForm.value);
    // Actualiza el producto
    // id conseguido de la url del producto
    let id = this.activateRoute.snapshot.paramMap.get('id') 
    if (id != null){
    this.backService.updateProduct( id, this.myForm.value).subscribe((result) => {
      if(result.status == 400){
        alert("error al actualizar producto")
      }
    }
    );}
    //seteo del form y de la nueva lista

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
  //       nombreProducto: product.nombreProd,
  //       cantidad: product.cantidad.toString(),
  //       categoria: product.categoria,
  //       tipoMaterial: product.tipoMaterial,
  //       urlImagen: product.urlImagen,
  //       precio: product.precio.toString(),
  //       descripcion: product.descripcion
  //     });
  //   } else {
  //     this.foundProduct = false;
  //     this.noFoundProduct = true;
  //   }
  // }


