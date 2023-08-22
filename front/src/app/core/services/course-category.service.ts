import { Injectable } from '@angular/core';
import { CourseCategory } from '../interfaces/courseCategory';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseCategoryService {

  private apiUrl= 'http://localhost:4001/'; //falta completar con datos de la ruta  
  

  constructor(private httpCourseCategory: HttpClient) { }

  getCourseCategory() {
    return this.httpCourseCategory.get<CourseCategory>(this.apiUrl)
  };
  
  getCourseCategoryById(id:number){
    return this.httpCourseCategory.get<CourseCategory>(this.apiUrl+'/'+id)
  }

  postCourseCategory(courseCategory: CourseCategory){
    return this.httpCourseCategory.post(this.apiUrl, courseCategory)
  }

  putCourseCategory(courseCategory: CourseCategory, id:number){
    return this.httpCourseCategory.put(this.apiUrl+'/'+id, courseCategory)
  }
}
