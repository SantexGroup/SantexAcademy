import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/core/interfaces/course';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  courses: Course[] = [];
  constructor(private courseService: CourseService, private router: Router) {
    this.getCourses();
  }

  ngOnInit(): void {}
  getCourses() {
    this.courseService.getCourse().subscribe(
      (res) => {
        this.courses = <any>res;
      },
      (err) => console.log(err)
    );
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id).subscribe(
      (res) => {
        window.location.reload();
      },
      (err) => console.log(err)
    );
  }

}
