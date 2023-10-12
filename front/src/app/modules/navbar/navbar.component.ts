import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/interfaces/course';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  courses: Course[]= [];
  constructor(private courseService: CourseService) {
    
    this.getCourses();
   }

  ngOnInit(): void {
  }
  getCourses(){
    this.courseService.getCourses().subscribe(
      (res) => {
        this.courses = <any>res;
      },
      (err) => console.log(err)
    );
  }
}
