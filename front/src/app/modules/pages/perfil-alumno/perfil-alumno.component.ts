import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.css'],
})
export class PerfilAlumnoComponent {
  isLoggedIn: boolean = true;

  perfilDelAlumno = {
    nombre: 'Nombre del Alumno',
    edad: 20,
    // Otros datos del perfil
    }

    constructor(private router: Router,private authService: AuthService) {}
  
    logout(): void {    
      this.authService.logout();
      console.log("Deslogueo")
      this.router.navigateByUrl('/login');
      
      // Actualiza el estado de autenticación después del logout
      this.authService.isAuthenticated$.subscribe((authenticated) => {
        this.isLoggedIn = authenticated;
      });
    }
  };


