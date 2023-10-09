import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseCategoryService } from 'src/app/core/services/course-category.service';
import { CourseCategory } from 'src/app/core/interfaces/courseCategory';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  form: FormGroup;
  category: CourseCategory = {
    id: 0,
    name: '',
  };

  constructor(   
    private fb: FormBuilder, 
    private courseCategoryService: CourseCategoryService,
    private router: Router,
    private datePipe: DatePipe) {
      this.form = this.fb.group({
        name: ['', Validators.required],
      });
      this.form.setValue({
        name: "",
      });
    }

  ngOnInit(): void {
  }
  add() {
    this.category = {
      id: 0,
      name: this.form.value.name,
    };
    this.courseCategoryService.postCourseCategory(this.category).subscribe(
      () => {
        this.router.navigate(['/admin/panel/categories']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
