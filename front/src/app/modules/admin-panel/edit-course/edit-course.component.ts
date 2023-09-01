import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/core/services/course.service';
import { Course } from 'src/app/core/interfaces/course';
import { CourseCategoryService } from 'src/app/core/services/course-category.service';
import { CourseCategory } from 'src/app/core/interfaces/courseCategory';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
  categories: CourseCategory[] = [];
  form: FormGroup;
  /*   form2:FormGroup */
  id: number;
  operacion: string = 'Agregar ';
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
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    this.getById(this.id);
    this.getCategories();
  }

  ngOnInit(): void {}
  getById(id: number) {
    this.courseService.getCourseById(id).subscribe((data) => {
      this.recursos = data;
      this.form.setValue({
        name: data.name,
        description: data.description,
        image: data.image,
        maxStudents: data.maxStudents,
        start: data.start,
        end: data.end,
        active: data.active,
        price: data.price,
        requirement: data.requirement,
        teacher: data.teacher,
        CourseCategoryName: this.recursos.CourseCategory.name,
      });
    });
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
  update() {
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
    console.log(this.course)
    this.courseService.putCourse(this.course, this.id).subscribe(
      (data) => {
        this.router.navigate(['/admin/panel']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
