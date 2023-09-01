import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product } from 'src/app/core/interfaces/product';
import { BackServiceService } from 'src/app/services/back-service.service';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css'],
})
export class FormUpdateComponent implements OnInit {
  constructor(private backService: BackServiceService) {}

  // Creamos una lista de productos como ejemplo
  productList: Product[] = [];

  searchForm = new FormGroup({
    buscarProducto: new FormControl('', Validators.required),
  });

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    quantity: new FormControl(0, [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    tipoMaterial: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  foundProduct: boolean | undefined;
  noFoundProduct: boolean | undefined;
  query: Product | undefined;

  // Función para buscar un producto
  searchProduct() {
    this.query = this.productList.find(
      (product) =>
        product.name.toLowerCase() ===
        this.searchForm.get('buscarProducto')?.value?.toLowerCase()
    );

    console.log('El producto se encontro: ', this.query);
    if (this.query) {
      this.foundProduct = true;
      this.noFoundProduct = false;

      // Agregamos los valores del producto al formulario
      this.myForm.patchValue({
        name: this.query?.name,
        quantity: this.query?.quantity,
        categoria: this.query?.categoria,
        tipoMaterial: this.query?.tipoMaterial,
        image: this.query?.image,
        price: this.query?.price,
        description: this.query?.description,
      });
    } else {
      this.foundProduct = false;
      this.noFoundProduct = true;
    }
  }

  ngOnInit(): void {
    this.backService.getProducts().subscribe((result) => {
      this.productList = result;
    });
  }

  // Función para actualizar un producto
  updateProduct() {
    // Actualiza el producto
    if(this.query?.id != undefined){
    this.backService.updateProduct(this.query.id, this.myForm.value).subscribe((result) => {
      if(result.status == 200){
        alert("Producto actualizado correctamente")
      }else{
        alert("Error al actualizar el producto")
      }
    }
    );}
    //seteo del form y de la nueva lista

    this.myForm.reset();
    this.backService.getProducts().subscribe((result) => {
      this.productList = result;
    });
  }
}

