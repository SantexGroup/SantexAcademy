import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private router: Router) { 
    this.isDropdownOpen  = false;
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
