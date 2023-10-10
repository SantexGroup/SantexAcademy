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

  // Función para eliminar un producto del carrito y que impacte el cambio en la lista de productos del componente padre
  removeProduct() {
    this.shoppingCartService.removeProduct(this.product?.id).subscribe();
    location.reload();
  }

  ngOnInit(): void {
     }
}
