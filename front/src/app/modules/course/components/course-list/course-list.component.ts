import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  constructor(private router: Router, private courseService: CourseService) { }

  viewCourseDetails(courseId: number) {
    this.router.navigate([`/course/${courseId}`]);
  }

  ngOnInit() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

}
