import { Component, OnInit } from '@angular/core';

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
  
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
