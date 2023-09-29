import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackServiceService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product';


@Component({
  selector: 'app-form-delete',
  templateUrl: './form-delete.component.html',
  styleUrls: ['./form-delete.component.css'],
})
export class FormDeleteComponent implements OnInit {
  constructor(private backService: BackServiceService) {}
  // Creamos una lista de productos como ejemplo
  productList: Product[] = new Array<Product>();

  // Propiedad para verificar si tienes productos
  hasProducts: boolean = false;

  // Prooducto seleccionado
  selectedProduct: Product | null = null;

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    tipoMaterial: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  isProductSelected: boolean = false;

  ngOnInit(): void {
    this.backService.getProducts().subscribe((result) => {
      this.productList = result;
      this.hasProducts = this.productList.length > 0;
    });
  }
  titularAlerta: string = '';

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  showDelete() {
    if (this.selectedProduct) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'custom-confirm-button-class',
          cancelButton: 'custom-confirm-button-class ',
        },
        buttonsStyling: true,
      });

      swalWithBootstrapButtons
        .fire({
          title: '¿Estás seguro?',
          text: '¡No serás capaz de revertir esto!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: '¡Si, eliminar!',
          confirmButtonColor: '#3085d6',
          cancelButtonText: '¡No, cancelar!',
          cancelButtonColor: '#d33',
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            if (this.selectedProduct) {
              this.backService
                .deleteProduct(this.selectedProduct.id)
                .subscribe((result) => {
                  this.titularAlerta = 'Producto eliminado .... ';
                });
            }
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              'Tu producto ha sido eliminado.',
              'success'
            );

            // Eliminar producto de la lista
            this.productList = this.productList.filter(
              (product) => product !== this.selectedProduct
            );

            // Realizar eliminación aquí

            this.selectedProduct = null; // Limpiar después de eliminar
            this.isProductSelected = false; // Deshabilitar campos nuevamente
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelado',
              'Producto seguro :)',
              'error'
            );
            // Realizar eliminación aquí
            this.selectedProduct = null; // Limpiar después de eliminar
            this.isProductSelected = false; // Deshabilitar campos nuevamente
          }
        });
    }

    return false;
  }
  mostrar() {
    Swal.fire('Registro exitoso .... ', this.titularAlerta);
    return false;
  }
}
