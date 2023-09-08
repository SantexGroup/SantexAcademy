import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  get user() {
    return this.authService.user;
  }

  constructor(private router: Router,
              private authService: AuthService) { }

  logout(){
    this.router.navigateByUrl('/catalogo-cursos');
    this.authService.logout();
  }

}
