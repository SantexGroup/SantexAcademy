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
  }
  isLogged: boolean = false;

  isLoggedFromService() {
    return this.authService.isLoggedIn();
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
