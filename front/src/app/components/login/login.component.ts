import { Component, OnInit } from '@angular/core';
import { WelcomeStudentComponent } from '../students/welcome-student/welcome-student.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
