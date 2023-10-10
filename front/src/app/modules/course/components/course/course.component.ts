import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: any;

  constructor(
    private route: ActivatedRoute, 
    private courseService: CourseService, 
    private router: Router,
    private toastr: ToastrService ) { }

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

  deleteCourse() {
    if (this.course && this.course.id) {      
      this.courseService.deleteCourseById(this.course.id).subscribe(
        () => {
          console.log('Curso eliminado exitosamente');
          this.toastr.success('Curso eliminado exitosamente')
          this.navigateToCourseList();
        },
        (error) => {
          console.error('Error al eliminar curso:', error);
          this.toastr.error('Error al eliminar curso')
        }
      );
    }
  }
  

  redirectToEditCourse(courseId: number) {
    this.router.navigate([`/course/edit-course/${courseId}`]);
  }

  navigateToCourseList() {
    this.router.navigate(['/course/course-list']);
  }
 
}
