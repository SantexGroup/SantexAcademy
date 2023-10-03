import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/core/interfaces/product';
import { FormUpdateComponent } from '../form-update/form-update.component';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-pop-up-home',
  templateUrl: './pop-up-home.component.html',
  styleUrls: ['./pop-up-home.component.css']
})
export class PopUpHomeComponent implements OnInit {
  
  product: Product;

  constructor(
    public dialogRef: MatDialogRef<PopUpHomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product },
    private dialog:MatDialog ,// Inyecta el servicio MatDialog
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) {
    this.product = data.product;
  }

  ngOnInit(): void {
  }

  openFormUpdateDialog(){
    const dialogRef = this.dialog.open(FormUpdateComponent, {
      width:'400px',
      data: {product: this.product}
    });
  }
  // funcionalidad cierra el dialog y te redirige a template FormUpdate
  closeDialog(): void {
    this.dialogRef.close();
    //console.log('Intentando navegar a form-update')
    this.router.navigate(['/dashboard/form-update', this.product.id]);
  } 

  agregarAlCarrito(): void {
    this.shoppingCartService.addProducto(this.product);
    console.log("Producto Carrito", this.product);
    this.dialogRef.close();
  }

  guardarParaMasTarde() {
    // fcion
  }
}

