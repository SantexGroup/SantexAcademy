import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isMenuOpen = false;
  isSmallScreen = false;

  constructor() {
    // Detectar el tamaño de pantalla inicial
    this.checkScreenSize();
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
}
