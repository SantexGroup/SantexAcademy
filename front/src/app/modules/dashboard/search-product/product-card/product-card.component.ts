import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';
import { PopUpHomeComponent } from '../../pop-up-home/pop-up-home.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product | undefined;

  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(product: Product): void {
    this.matDialog.open(PopUpHomeComponent, {
      width: '500px',
      data: { product }
    });
  }

}
