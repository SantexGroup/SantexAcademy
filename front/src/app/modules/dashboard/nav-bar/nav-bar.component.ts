
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { UserService } from 'src/app/core/services/user.service';


export interface menuItem {
  name: string,
  paht: string,
  type: number
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  menu: menuItem[] = [{name: "Home", paht: "home", type:0}, {name: "Agregar Producto", paht: "form-add-product", type:1}, {name: "Actualizar Producto", paht:"form-update", type:1}, {name: "Buscar Producto", paht: "search-product", type:0}, {name: "Eliminar Producto", paht: "form-delete", type:1}];
  
  isMenuOpen: boolean = false;
  isDropdownOpen: boolean = false;

  isAuthenticated: boolean = false;
  userType:number=0
  total$: Observable<number>;
  user: any = localStorage.getItem("user")
  constructor(private shoppingCartService: ShoppingCartService, private elRef: ElementRef,private router: Router, private userServ: UserService) { 
    this.total$ = this.shoppingCartService.obtenerCarrito("1").pipe(
        map(products => products[0].Products.length)
      );
    this.isDropdownOpen  = false;
    this.isAuthenticated = this.userServ.isLoggedIn();
    if(this.user){
      this.user = JSON.parse(this.user)
      this.userType = this.user.type
    }    
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
      this.userServ.setPreviousUrl('/')
      this.router.navigate(['./dashboard/login']);
    }
  }

  logout() {
    // Simula lógica de cierre de sesión
    this.userServ.logout();
    //this.router.navigate(['./dashboard/login']);
  }

}
