import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string = '';
  userId: number | null = null;
  isLogged: boolean = false;
  isAdmin: boolean = false;
  isStudentOrTeacher: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.isLogged = this.isLoggedFromService();
    this.isAdmin = this.isAdminFromService();
    this.isStudentOrTeacher = this.isTeacherOrStudentFromService();

    const storedUsername: string | null = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }


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
    const username = this.authService.getUsername();
    if (username) {
      this.username = username;
      localStorage.setItem('username', username);
    }
    this.userId = this.authService.getUserId();
  }

  logout() {
    localStorage.removeItem('username');
    this.authService.logout();
    this.navigateToLanding();
  }

  navigateToLanding() {
    this.router.navigate(['/']);
  }

}
