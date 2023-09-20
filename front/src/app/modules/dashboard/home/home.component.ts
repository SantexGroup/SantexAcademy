import { Component, OnInit } from '@angular/core';
import { BackServiceService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product';
import { PopUpHomeComponent } from '../pop-up-home/pop-up-home.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Lista de ejemplo de productos

  constructor(private backService: BackServiceService, private matDialog:MatDialog) { }
  productList: Product[] = new Array<Product>();

  ngOnInit(): void {
    this.backService.getProducts().subscribe((result) => {
      this.productList = result;
    });
  }

  openDialog(product: Product): void {
    this.matDialog.open(PopUpHomeComponent, {
      width: '500px',
      data: { product }
    });
  }


}
