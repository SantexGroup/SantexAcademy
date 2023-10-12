import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/interfaces/course';
import { CourseService } from 'src/app/core/services/course.service';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {


  courses: Course[] = [];
  moreCourses: Course[] = [];
  courseList: Course[]= [];
  allCourses = false;
  showAllCourses() {
    this.allCourses = !this.allCourses
  }
  constructor(private courseSvc: CourseService) {
    
  }

  ngOnInit(): void {
  
    this.courseSvc.getCourses().subscribe((data) => {
      this.courseList = <any>data;
        this.courses = this.courseList.filter((course) => this.courseList.indexOf(course) < 6);
        this.moreCourses = this.courseList.filter((course) => this.courseList.indexOf(course) >= 6);
  
  },
  (error)=>{
    console.log(error)
  });

  }
  
}
