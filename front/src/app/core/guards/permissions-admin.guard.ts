import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsAdminGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if( this.hasAdmin() ){
      return true;
    }

    //Hacer una redirección
    // this.router.navigate(['/']);
    
    //Borrar alert de prueba, cuando la redireccion este lista
    alert('No tienes permisos')
    

    return false;
  }

  hasAdmin():boolean {
    //recupero el jwt del localStorage
    const jwt = localStorage.getItem('jwt');    

    //Si hay un token disponible decodifico el token
    if(jwt !== null){
      const decodeToken: any = jwtDecode(jwt);

      return decodeToken.is_admin;
      
    }

    return false
  }
  
}
