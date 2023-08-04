import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-product',
  templateUrl: './form-add-product.component.html',
  styleUrls: ['./form-add-product.component.css']
})
export class FormAddProductComponent implements OnInit {

  constructor(private myFormAddProduct: FormBuilder) { }

  myForm = this.myFormAddProduct.group({
    nombreProducto: ['', [Validators.required]],
    cantidad: ['', [Validators.required]],
    categoria: ['', [Validators.required]],
    tipoMaterial: ['', [Validators.required]],
    urlImagen: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    descripcion: ['', [Validators.required]]
  })

  /* myForm = new FormGroup({
    nombreProducto: new FormControl('', [Validators.required]),
    cantidad: new FormControl('', [Validators.required, ]),
    categoria: new FormControl('', [Validators.required]),
    tipoMaterial: new FormControl('', [Validators.required]),
    urlImagen: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required])
  }) */

  get nombreProducto() {
    return this.myForm.get('nombreProducto');
  }

  get cantidad() {
    return this.myForm.get('cantidad');
  }

  get categoria() {
    return this.myForm.get('categoria');
  }

  get tipoMaterial() {
    return this.myForm.get('tipoMaterial');
  }

  get urlImagen() {
    return this.myForm.get('urlImagen');
  }

  get precio() {
    return this.myForm.get('precio');
  }

  get descripcion() {
    return this.myForm.get('descripcion');
  }

  addProduct() {
    console.log('Agregar', this.myForm.value)
  } 

  ngOnInit(): void {
  }

}
