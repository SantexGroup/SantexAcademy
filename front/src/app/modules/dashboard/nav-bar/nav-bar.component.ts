import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

export interface menuItem {
  name: string,
  paht: string,
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  menu: menuItem[] = [{name: "Home", paht: "home"}, {name: "Agregar Producto", paht: "form-add-product"}, {name: "Actualizar Producto", paht:"form-update"}, {name: "Buscar Producto", paht: "search-product"}, {name: "Eliminar Producto", paht: "form-delete"}];
  
  isMenuOpen: boolean = false;
  
  total$: Observable<number>;

  constructor(private shoppingCartService: ShoppingCartService, private elRef: ElementRef) { 
    this.total$ = this.shoppingCartService.cart$
      .pipe(
        map(products => products.length)
      );

  }

  @HostListener('document:click', ['$event'])
  onDocumentClick($event: MouseEvent): void {
    const elementoExcluido = this.elRef.nativeElement.querySelector('.header-menu-button');
    if (!elementoExcluido.contains($event.target)) {
      // Si no hace click en el boton de menu.
      this.isMenuOpen = false;
    } else {
      // Si hace click en el boton de menu.
      this.isMenuOpen = !this.isMenuOpen;
    }
  }


  ngOnInit(): void {
  }

}
