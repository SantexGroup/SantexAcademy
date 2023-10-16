import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseCategory } from 'src/app/core/interfaces/courseCategory';
import { CourseCategoryService } from 'src/app/core/services/course-category.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  coursesCategory: CourseCategory[]= [];
  dates: any={};
  token: string | null= localStorage.getItem('token');
  admin : boolean = false;
  logueado : boolean = false;
  register : boolean = false;
  constructor(private courseCategoryService: CourseCategoryService, private router: Router) {
    
    this.getCourseCategory();
    this.getToken();
   }

  ngOnInit(): void {
  }
  getCourseCategory(){
    this.courseCategoryService.getCourseCategory().subscribe(
      (res) => {
        this.coursesCategory = <any>res;
      },
      (err) => console.log(err)
    );
  }
  getToken(){
    if (this.token) {
      try {
        const tokenPayload = JSON.parse(atob(this.token.split('.')[1]));
        console.log(tokenPayload)
        this.dates.isAdmin = tokenPayload.isAdmin;
        this.logueado = true
        if(this.dates.isAdmin){
          this.admin = true
        }
      } catch (error) {
        
      }
    }else{
      this.register = true
      this.admin = false
    }
  }
  logOut(){
    localStorage.clear();
    window.location.reload();
  }

}
