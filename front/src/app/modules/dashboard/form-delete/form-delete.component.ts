import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  selector: 'app-form-delete',
  templateUrl: './form-delete.component.html',
  styleUrls: ['./form-delete.component.css']
})
export class FormDeleteComponent implements OnInit {

    // Creamos una lista de productos como ejemplo
    productList: Product[] = [
      {nombreProd: 'Mesa', cantidad: 30, categoria: 'Mesa', tipoMaterial: 'Madera', urlImagen: './img/mesa.png', precio: 4500, descripcion: 'Mesa cuadrada'},
      {nombreProd: 'Silla', cantidad: 30, categoria: 'Silla', tipoMaterial: 'plastico', urlImagen: './img/silla.png', precio: 1500, descripcion: 'Silla de plastico color blanco'},
      {nombreProd: 'Mesa Real', cantidad: 10, categoria: 'Mesa', tipoMaterial: 'algorrobo', urlImagen: './img/silla.png', precio: 6000, descripcion: 'Mesa redonda de pata central '},
      {nombreProd: 'Silla', cantidad: 10, categoria: 'Silla', tipoMaterial: 'plastico', urlImagen: './img/silla.png', precio: 1500, descripcion: 'Silla de plastico color blanco'},      
      
    ];
  
   // Propiedad para verificar si tienes productos
   hasProducts: boolean = false;

   // Prooducto seleccionado
   selectedProduct: Product | null = null;


  constructor() { }

  myForm = new FormGroup({
    nombreProducto: new FormControl('', [Validators.required]),
    cantidad: new FormControl('', [Validators.required, ]),
    categoria: new FormControl('', [Validators.required]),
    tipoMaterial: new FormControl('', [Validators.required]),
    urlImagen: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required])
  })

  isProductSelected: boolean = false;


  ngOnInit(): void {
    this.hasProducts = this.productList.length > 0;
  }
  titularAlerta: string ='';


  selectProduct(product: Product) {
    this.selectedProduct = product;
  }
  

  showDelete() {
    console.log('Producto: ', this.selectedProduct)
    if(this.selectedProduct){
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'custom-confirm-button-class',
          cancelButton: 'custom-confirm-button-class '
        },
        buttonsStyling: true
      });

      swalWithBootstrapButtons.fire({
        title: '¿Estás seguro?',
        text: "¡No serás capaz de revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '¡Si, eliminar!',
        confirmButtonColor: '#3085d6',
        cancelButtonText: '¡No, cancelar!',
        cancelButtonColor: '#d33',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'Tu producto ha sido eliminado.',
            'success'
          )
          
          // Eliminar producto de la lista
          this.productList = this.productList.filter(product => product !== this.selectedProduct);

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
          )
          // Realizar eliminación aquí
          this.selectedProduct = null; // Limpiar después de eliminar
          this.isProductSelected = false; // Deshabilitar campos nuevamente
        }
      })
    

    }
    
    
    
    return false;
  }
  mostrar() {
    Swal.fire('Registro exitoso .... ', this.titularAlerta);
    return false;
  }
}
