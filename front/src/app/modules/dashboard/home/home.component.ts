import { Component, OnInit } from '@angular/core';
import { BackServiceService } from 'src/app/services/back-service.service';
import { Product } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Lista de ejemplo de productos

  constructor(private backService: BackServiceService) { }
  productList: Product[] = new Array<Product>();

  ngOnInit(): void {
    this.backService.getProducts().subscribe((result) => {
      this.productList = result;
    });
  }

}
