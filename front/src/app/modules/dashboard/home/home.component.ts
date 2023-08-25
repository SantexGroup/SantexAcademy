import { Component, OnInit } from '@angular/core';
import { BackServiceService } from 'src/app/services/back-service.service';

export interface Product {
  id: string;
  name: string;
  quantity: number;
  categoria: string;
  tipoMaterial: string;
  image: string;
  price: number;
  description: string;
}

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
