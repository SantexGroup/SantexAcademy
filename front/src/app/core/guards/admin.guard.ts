import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Credencial } from '../interfaces/credencial';
import { CuentaService } from '../services/cuenta.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {

  constructor(private cuentaService:CuentaService, private router:Router){}
  credencialesUsuario:Credencial| null = null;
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      this.cuentaService.getCredencialesUsuario.pipe(take(1)).subscribe({
        next:(res)=>{
          this.credencialesUsuario = res;
        }
      });

      if(this.credencialesUsuario === null || this.credencialesUsuario.tipo !== 'admin') return this.router.createUrlTree(['index']);

      return true;
    
  }
}
