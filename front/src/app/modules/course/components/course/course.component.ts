import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: any;

  constructor(private route: ActivatedRoute, private courseService: CourseService, private router: Router ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const courseId = params.get('id');
      if (courseId) {        
        this.courseService.getCourseById(courseId).subscribe((course) => {
          this.course = course;
        });
      }
    });
  }
 
}
