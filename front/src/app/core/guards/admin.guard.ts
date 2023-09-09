import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, take } from 'rxjs';
import { AdminService } from '../services/admin.service';
import { Credencial } from '../interfaces/credencial';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {

  constructor(private adminService:AdminService, private router:Router){}
  credencialesAdmin:Credencial| null = null;
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      this.adminService.getCredencialesAdmin.pipe(take(1)).subscribe({
        next:(res)=>{
          this.credencialesAdmin = res;
        }
      });

      if(this.credencialesAdmin === null) return this.router.createUrlTree(['index']);

      return true;
    
  }
}
