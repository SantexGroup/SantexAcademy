import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course: any = {};
  courseId: string = '';

  constructor(private route: ActivatedRoute, private courseService: CourseService, private router: Router, private toastr: ToastrService) { }

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
    this.courseService.updateCourse(this.course).subscribe({
      next:(response: any) => {
        console.log('Curso actualizado exitosamente', response);        
        this.router.navigate([`/course/${this.courseId}`]);
        this.toastr.success('Curso editado con exito')
      },
      error:(error: any) => {
        console.error('Error al actualizar el curso:', error);
        this.toastr.error('Error al editar el curso')
      }
    });
  }

  navigateToCourseList() {
    this.router.navigate(['/course/course-list']);
  }


}
