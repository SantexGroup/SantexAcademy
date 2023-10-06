import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Credencial } from '../interfaces/credencial';
import { CuentaService } from '../services/cuenta.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionGuard implements CanLoad {

  constructor(private cuentaService:CuentaService, private router:Router){

  }
  credencialesOrganizacion!:Credencial|null;
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.cuentaService.getCredencialesUsuario.pipe(take(1)).subscribe({
        next:(res)=> this.credencialesOrganizacion = res
      });


      if(this.credencialesOrganizacion === null || this.credencialesOrganizacion.tipo !== 'organizacion' ){
        
        return this.router.createUrlTree(['/index']);
      }

    return true;
  }
}
