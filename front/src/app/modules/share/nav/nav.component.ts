import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; // Importa Router y NavigationEnd

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isMenuOpen = false;
  isSmallScreen = false;
  isProfileMenuOpen = false;
  activeRoute: string = ''; // Variable para rastrear la ruta activa

  constructor(private router: Router) {
    // Detectar el tamaño de pantalla inicial
    this.checkScreenSize();

    // Suscríbete al evento de cambio de ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url; // Actualiza la ruta activa cuando cambie la navegación
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    // Actualizar el valor de isSmallScreen cuando cambie el tamaño de la pantalla
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    // Cambia el valor de isSmallScreen según el tamaño de pantalla actual
    this.isSmallScreen = window.innerWidth < 768; // Puedes ajustar el valor 768 según tus necesidades
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
}
