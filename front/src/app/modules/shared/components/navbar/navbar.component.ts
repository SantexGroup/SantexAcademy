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
    this.isTeacher = this.isTeacherFromService();
    this.isStudent = this.isStudentFromService();
  }

  isLogged: boolean = false;
  isAdmin: boolean = false;
  isTeacher: boolean = false;
  isStudent: boolean = false;


  isLoggedFromService() {
    return this.authService.isLoggedIn();
  }

  isAdminFromService() {
    return this.authService.isAdministrator();
  }

  isTeacherFromService() {
    return this.authService.isTeachers();
  }

  isStudentFromService() {
    return this.authService.isStudents();
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
