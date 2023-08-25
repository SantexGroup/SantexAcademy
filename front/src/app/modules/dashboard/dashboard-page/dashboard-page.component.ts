import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/interfaces/course.interface';
import { CourseServiceService } from 'src/app/core/services/course-service.service';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  courses: Course[] = [];

  constructor(private courseSvc: CourseServiceService) {}

  ngOnInit(): void {
    this.courseSvc.getCourses().subscribe((courseList: Course[]) => {
        this.courses = courseList;
    });
  }
   
}
