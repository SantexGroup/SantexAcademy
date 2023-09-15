import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UserDataService } from '../services/toolServices/userData.service';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private userData: UserDataService,
    private router: Router
  ){ }

  canActivate():boolean {
    if(this.userData.isAuthenticated()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
