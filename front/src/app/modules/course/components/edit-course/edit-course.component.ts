import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course: any = {};
  courseId: string = '';

  constructor(private route: ActivatedRoute, private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseId = params['id'];
      if (this.courseId) {
        this.courseService.getCourseById(this.courseId).subscribe((course) => {
          this.course = course;
          console.log('Curso cargado:', this.course);
        });
      }
    });
  }

  editCourse() {
    this.courseService.updateCourse(this.course).subscribe(
      (response: any) => {
        console.log('Curso actualizado exitosamente', response);        
        this.router.navigate([`/course/${this.courseId}`]);
      },
      (error: any) => {
        console.error('Error al actualizar curso:', error);
      }
    );
  }

  navigateToCourseList() {
    this.router.navigate(['/course/course-list']);
  }


}
