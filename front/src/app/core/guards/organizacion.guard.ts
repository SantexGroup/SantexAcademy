import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OrganizacionService } from '../services/organizacion.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionGuard implements CanLoad {

  constructor(private organizacionService:OrganizacionService, private router:Router){

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.organizacionService.credencialesOrganizacion.value == null){
        this.router.navigate(['/index']);
        return false;
      }

    return true;
  }
}
