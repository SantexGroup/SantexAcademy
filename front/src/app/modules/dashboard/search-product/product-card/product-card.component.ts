import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
