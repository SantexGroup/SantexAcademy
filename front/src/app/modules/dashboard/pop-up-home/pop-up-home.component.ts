import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-pop-up-home',
  templateUrl: './pop-up-home.component.html',
  styleUrls: ['./pop-up-home.component.css']
})
export class PopUpHomeComponent implements OnInit {
  product: Product;

  constructor(
    public dialogRef: MatDialogRef<PopUpHomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product }
  ) {
    this.product = data.product;
  }

  ngOnInit(): void {
  }
  agregarAlCarrito() {
    // fcion
  }

  guardarParaMasTarde() {
    // fcion
  }
}

