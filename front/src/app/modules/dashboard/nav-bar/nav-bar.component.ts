
import { Router } from '@angular/router';
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
  isDropdownOpen: boolean = false;

  isAuthenticated: boolean = false;
  
  total$: Observable<number>;

  constructor(private shoppingCartService: ShoppingCartService, private elRef: ElementRef,private router: Router) { 
    this.total$ = this.shoppingCartService.obtenerCarrito("1").pipe(
        map(products => products[0].Products.length)
      );
    this.isDropdownOpen  = false;
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

  

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onButtonClick() {
    if (this.isAuthenticated) {
      // Si el usuario está autenticado, muestra el menú desplegable.
      this.isDropdownOpen = !this.isDropdownOpen;
      //this.router.navigate(['./dashboard/home']);
    } else {
      // Si el usuario no está autenticado, redirige al usuario a la página de inicio de sesión.
      this.router.navigate(['./dashboard/login']);
    }
  }

  logout() {
    // Simula lógica de cierre de sesión
    this.isAuthenticated = false;
    //this.router.navigate(['./dashboard/login']);
  }

}
