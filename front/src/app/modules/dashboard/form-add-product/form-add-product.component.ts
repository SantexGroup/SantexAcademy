import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-add-product',
  templateUrl: './form-add-product.component.html',
  styleUrls: ['./form-add-product.component.css']
})
export class FormAddProductComponent implements OnInit {

  constructor(private myFormAddProduct: FormBuilder) { }

  myForm = new FormGroup({
    nombreProducto: new FormControl('', [Validators.required]),
    cantidad: new FormControl('', [Validators.required, ]),
    categoria: new FormControl('', [Validators.required]),
    tipoMaterial: new FormControl('', [Validators.required]),
    urlImagen: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required])
  })

  addProduct() {
    console.log('Agregar', this.myForm.value)
    
    // Resetea el formulario para limpiar los inputs
    this.myForm.reset();
  } 

  ngOnInit(): void {
  }

}
