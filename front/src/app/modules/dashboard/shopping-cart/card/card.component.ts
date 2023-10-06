import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product: Product | undefined;

  constructor(private shoppingCartService: ShoppingCartService) { }

  // Función para eliminar un producto del carrito
  removeProduct(id: Product | undefined) {
    this.shoppingCartService.removeProduct(this.product?.id);
  }

  ngOnInit(): void {
    console.log("llega",this.product) }
}
