import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) {
    this.isLogged = this.isLoggedFromService();
    this.isAdmin = this.isAdminFromService();
    console.log('isAdmin desde navbar', this.isAdmin)
  }
  isLogged: boolean = false;
  isAdmin: boolean = false;

  isLoggedFromService() {
    return this.authService.isLoggedIn();
  }

  isAdminFromService() {
    return this.authService.isAdministrator();
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
