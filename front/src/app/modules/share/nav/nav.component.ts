import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  implements OnInit {

  isMenuOpen = false;
  isSmallScreen = false;
  isLoggedIn = false;


  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
   // Verificar si el usuario ha iniciado sesión al cargar el componente
  this.isLoggedIn = this.authService.user ? true : false;
  }     
  logout(){
    this.router.navigateByUrl('/login');
    this.authService.logout();
     this.isLoggedIn = false;
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
