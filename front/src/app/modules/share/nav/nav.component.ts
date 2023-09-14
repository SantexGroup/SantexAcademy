<<<<<<< HEAD
import { Component, HostListener } from '@angular/core';
=======
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
>>>>>>> juanjoDiaz

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

<<<<<<< HEAD
  isMenuOpen = false;
  isSmallScreen = false;

  constructor() {
    // Detectar el tamaño de pantalla inicial
    this.checkScreenSize();
=======
  get user() {
    return this.authService.user;
  }

  constructor(private router: Router,
              private authService: AuthService) { }

  logout(){
    this.router.navigateByUrl('/catalogo-cursos');
    this.authService.logout();
>>>>>>> juanjoDiaz
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
