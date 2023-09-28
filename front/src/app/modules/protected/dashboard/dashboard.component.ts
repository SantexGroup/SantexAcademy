import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  get user() {
    return this.authService.user;
  }

  constructor(private router: Router,
              private authService: AuthService) { }

  logout(){
    //this.router.navigateByUrl('/auth/login');
    this.router.navigateByUrl('/login/login');
    this.authService.logout();
  }

}
