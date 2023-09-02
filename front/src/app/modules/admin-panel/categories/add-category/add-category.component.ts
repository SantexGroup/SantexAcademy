import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseCategoryService } from 'src/app/core/services/course-category.service';
import { CourseCategory } from 'src/app/core/interfaces/courseCategory';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: CourseCategory = {
    id: 0,
    name: '',
  };

  constructor(    
    private courseCategoryService: CourseCategoryService,
    private router: Router,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
  }
  add() {
    this.courseCategoryService.postCourseCategory(this.category).subscribe(
      () => {
        this.router.navigate(['/admin/panel']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
