import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isMenuOpen = false;
  isSmallScreen = false;
  isProfileMenuOpen = false;
  activeRoute: string = '';
  isLoggedIn = false;
  

  constructor(private router: Router, public authService: AuthService) {
    this.checkScreenSize();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url;
      }
    });
    this.isLoggedIn = false;
  }

  ngOnInit() {
    this.activeRoute = this.router.url;
    this.isLoggedIn = this.authService.user ? true : false;
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth < 768;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  async logout() {
    console.log('logout() called');
    await this.authService.logout(); // Espera a que se complete el proceso de cierre de sesión
    this.router.navigateByUrl('/dashboard'); // Redirige después de que se haya completado el cierre de sesión
    this.isLoggedIn = false;
  }
}



























































































































/*import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';*/

/*@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})*/
/*export class NavComponent implements OnInit {
  isMenuOpen = false;
  isSmallScreen = false;
  isProfileMenuOpen = false;
  activeRoute: string = '';
  isLoggedIn = false;
  showHome: boolean = false; // Inicialmente, el logotipo muestra la imagen
  //isProfileDropdownOpen = false;*/

  /*constructor(private router: Router,
    private authService: AuthService) {
    this.checkScreenSize();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url;
      
      }
    });
    this.isLoggedIn = false;
  }*/

 /* ngOnInit() {
    // Detectar la ruta activa al cargar la página
    this.activeRoute = this.router.url;
    this.isLoggedIn = this.authService.user ? true : false;
  }*/

  /*@HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }*/

 /* private checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth < 768;
  }*/

  /*toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }*/

  /*toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }*/

  /*toggleLogo() {
    this.showHome = !this.showHome; // Cambia el estado de showHome al hacer clic en el logotipo
  }*/
  

 /* logout(){
    console.log('logout() called');
    this.router.navigateByUrl('/login');
    this.authService.logout();
     this.isLoggedIn = false;
  }

  
  
}*/
