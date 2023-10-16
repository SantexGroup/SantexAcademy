import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseCategoryService } from 'src/app/core/services/course-category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent{
 name : string ="";
 categories: any={};
 existCourses: boolean = true
  constructor(    
    private courseCategoryService: CourseCategoryService,
    private aRouter: ActivatedRoute,
    private router: Router,) { 
    
    this.name = String(aRouter.snapshot.paramMap.get('CategoryName'));
    this.getCategoriesCourse()
  }


  getCategoriesCourse()  {
    try {
      this.courseCategoryService.getCategoriesCourse(this.name).subscribe(
        (data)=>{
        this.categories = <any>data;
        if(!this.categories.Courses.some(Boolean)){
          this.existCourses = false
        }
        },
        (error)=>{
          console.log(error)
        }
      )
    } catch (error) {
      
    }
  }



}
