import { Component } from '@angular/core';
import { CourseService } from 'src/app/core/services/course.service';
import { Course } from 'src/app/core/interfaces/course';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CourseCategoryService } from 'src/app/core/services/course-category.service';
import { CourseCategory } from 'src/app/core/interfaces/courseCategory';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent {
  categories: CourseCategory[] = [];
  form: FormGroup;
  id: number;
  recursos: any = [];
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
    private fb: FormBuilder,
    private courseService: CourseService,
    private router: Router,
    private aRouter: ActivatedRoute,
    private courseCategoryService :CourseCategoryService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      maxStudents: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      active: ['', Validators.required],
      price: ['', Validators.required],
      requirement: ['', Validators.required],
      teacher: ['', Validators.required],
      CourseCategoryName: ['', Validators.required],
    });
    this.form.setValue({
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
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    this.getCategories();
  }

  ngOnInit(): void {}

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
    this.course = {
      id: this.id,
      name: this.form.value.name,
      description: this.form.value.description,
      image: this.form.value.image,
      maxStudents: this.form.value.maxStudents,
      start: this.form.value.start,
      end: this.form.value.end,
      active: this.form.value.active,
      price: this.form.value.price,
      requirement: this.form.value.requirement,
      teacher: this.form.value.teacher,
      CourseCategoryName: this.form.value.CourseCategoryName,
    };
    this.courseService.putCourse(this.course, this.id).subscribe(
      (data) => {
        this.router.navigate(['/admin/panel/courses']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
