import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, take } from 'rxjs';
import { OrganizacionService } from '../services/organizacion.service';
import { Credencial } from '../interfaces/credencial';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionGuard implements CanLoad {

  constructor(private organizacionService:OrganizacionService, private router:Router){

  }
  credencialesOrganizacion!:Credencial|null;
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.organizacionService.getCredencialesOrganizacion.pipe(take(1)).subscribe({
        next:(res)=> this.credencialesOrganizacion = res
      });


      if(this.credencialesOrganizacion == null){
        
        return this.router.createUrlTree(['/index']);
      }

    return true;
  }
}
