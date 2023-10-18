import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-perfil-docente',
  templateUrl: './perfil-docente.component.html',
  styleUrls: ['./perfil-docente.component.css']
})
export class PerfilDocenteComponent implements OnInit {
  isLoggedIn: boolean = true;

  perfilDelDocente = {
    nombre: 'Nombre del Docente',
    edad: 20,
    // Otros datos del perfil


    }
  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {    
    this.authService.logout();
    console.log("Deslogueo")
    this.router.navigateByUrl('/login');
    
    // Actualiza el estado de autenticación después del logout
    this.authService.isAuthenticated$.subscribe((authenticated) => {
      this.isLoggedIn = authenticated;
    });
  }
}
