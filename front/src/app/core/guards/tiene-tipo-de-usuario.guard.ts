import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TieneTipoDeUsuarioGuard implements CanActivate, CanLoad {

  constructor( private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const tipoPermitido = route.data?.['tipoPermitido'];

      console.log('tipoPermitido', tipoPermitido);
      console.log('user.tipoDeUsuario', this.authService.user.tipoDeUsuario);

      return Boolean(tipoPermitido.includes(this.authService.user.tipoDeUsuario));
      
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const tipoPermitido = route.data?.['tipoPermitido'];

      return Boolean(tipoPermitido.includes(this.authService.user.tipoDeUsuario));
  }
}