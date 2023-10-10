import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../services/user.service';
import { CanActivate } from '@angular/router';


 @Injectable()
 export class AuthGuard implements CanActivate {
    constructor(private service: UserService, private router: Router) {

    }
canActivate(): boolean {
    this.service.setPreviousUrl(this.router.url);
    if (this.service.isLoggedIn()) {
      return true; // El usuario está autenticado, permite la navegación
    } else {
      this.router.navigate(['/dashboard/login']); // Redirige al usuario a la página de inicio de sesión si no está autenticado
      return false; // No permite la navegación
    }
  }


 }
