import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseCategoryService } from 'src/app/core/services/course-category.service';
import { CourseCategory } from 'src/app/core/interfaces/courseCategory';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: CourseCategory[] = [];
  constructor(private courseCategoryService: CourseCategoryService, private router: Router) { 
    this.getCategories();
  }

  ngOnInit(): void {
  }
  getCategories() {
    this.courseCategoryService.getCourseCategory().subscribe(
      (res) => {
        this.categories = <any>res;
      },
      (err) => console.log(err)
    );
  }

  deleteCourseCategory(id: number) {
    this.courseCategoryService.deleteCourseCategory(id).subscribe(
      (res) => {
        window.location.reload();
      },
      (err) => console.log(err)
    );
  }
}
