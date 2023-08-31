import { Component } from '@angular/core';
import { CourseService } from 'src/app/core/services/course.service';
import { Course } from 'src/app/core/interfaces/course';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CourseCategoryService } from 'src/app/core/services/course-category.service';
import { CourseCategory } from 'src/app/core/interfaces/courseCategory';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent {
  categories: CourseCategory[] = [];
  value: number = 0;
  selectedCategory: string = '';
  cant: number = 0;
  course: Course = {
    id: 0,
    name: '',
    description: '',
    image: '',
    maxStudents: 0,
    start: new Date(),
    end: new Date(),
    active: false,
    price: 0,
    requirement: '',
    teacher: '',
    CourseCategoryName: '',
  };

  constructor(
    private courseService: CourseService,
    private courseCategoryService: CourseCategoryService,
    private router: Router,
    private datePipe: DatePipe
  ) {
    this.getCategories();
  }
  getCategories() {
    this.courseCategoryService.getCourseCategory().subscribe(
      (res) => {
        this.categories = <any>res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  add() {
    console.log(this.course)
    this.courseService.postCourse(this.course).subscribe(
      () => {
        this.router.navigate(['/admin/panel']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  update(courseCategory: CourseCategory) {
    console.log(courseCategory.id);
    this.value = courseCategory.id;
    console.log(this.value);
  }
}
