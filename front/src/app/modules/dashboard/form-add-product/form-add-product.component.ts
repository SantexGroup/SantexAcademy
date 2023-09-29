import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { BackServiceService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-form-add-product',
  templateUrl: './form-add-product.component.html',
  styleUrls: ['./form-add-product.component.css']
})
export class FormAddProductComponent implements OnInit {

  constructor(private backService: BackServiceService, private myFormAddProduct: FormBuilder, private categoriaService:CategoriaService) { }
  categorias : Categoria[] = new Array();
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required, ]),
    categories: new FormControl('', [Validators.required]),
    tipoMaterial: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  })

  addProduct() {
    console.log('Agregar', this.myForm.value)
    this.backService.addProduct(this.myForm.value).subscribe((result) => {console.log(result)});
    
    this.myForm.reset();
  } 

  ngOnInit(): void {
    this.categoriaService.getCategories().subscribe((result) => {
      this.categorias = result;
    });
  }

}
