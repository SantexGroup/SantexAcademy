import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isMenuOpen = false;
  isSmallScreen = false;



  constructor(private router: Router,
              private authService: AuthService) { }

              
  logout(){
    this.router.navigateByUrl('/catalogo-cursos');
    this.authService.logout();
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
