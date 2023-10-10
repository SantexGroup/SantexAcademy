import { Component, OnInit } from '@angular/core';
import { BackServiceService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product';
import { PopUpHomeComponent } from '../pop-up-home/pop-up-home.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Lista de ejemplo de productos
  user: any = localStorage.getItem("user")
  constructor(private backService: BackServiceService, private matDialog:MatDialog, private router: Router ) {
    if(this.user){
      this.user=JSON.parse(this.user)
      if(this.user.type==2){
        this.router.navigate(['/dashboard/home-vendedor'])
      }
    }



   }
  productList: Product[] = new Array<Product>();
  newProducts: Product[] = new Array<Product>();
  ngOnInit(): void {
    this.backService.getProducts().subscribe((result) => {
      this.productList = result;
      this.newProducts = result.slice(result.length - 14);
    });
   
  }

  openDialog(product: Product): void {
    this.matDialog.open(PopUpHomeComponent, {
      width: '500px',
      data: { product }
    });
  }


}
