import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VoluntarioService } from '../services/voluntario.service';

@Injectable({
  providedIn: 'root'
})
export class VoluntarioGuard implements CanLoad {
  constructor(private voluntarioService:VoluntarioService, private router:Router){

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      //Controlamos que si el valor del observable credenciales usuario es nulo, no lo deje pasar y lo redirija al index, de lo contrario lo deja pasar
      if(this.voluntarioService.credencialesVoluntario.value == null){
        
        this.router.navigate(['/index']);
        return false;
      }
    
    
      return true;
  }
}
