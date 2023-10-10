import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    this.isLogged = this.isLoggedFromService();
    this.isAdmin = this.isAdminFromService();
    this.isStudentOrTeacher = this.isTeacherOrStudentFromService();
  }

  isLogged: boolean = false;
  isAdmin: boolean = false;
  isStudentOrTeacher: boolean = false;


  isLoggedFromService() {
    return this.authService.isLoggedIn();
  }

  isAdminFromService() {
    return this.authService.isAdministrator();
  }

  isTeacherOrStudentFromService() {
    return this.authService.checkStudentOrTeacher();
  }


  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.navigateToLanding();
  }

  navigateToLanding() {
    this.router.navigate(['/']);
  }

}
