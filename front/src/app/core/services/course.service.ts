import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Course } from '../interfaces/course';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl= 'http://localhost:4001/course';  
  

  constructor(private httpCourse: HttpClient) { }

  getCourses() {
    return this.httpCourse.get<Course[]>(this.apiUrl)
  };
  
  getCourseById(id:number){
    return this.httpCourse.get<Course>(this.apiUrl+'/'+id)
  }

  postCourse(course: Course){
    return this.httpCourse.post(this.apiUrl, course)
  }

  putCourse(course: Course, id:number){
    return this.httpCourse.put(this.apiUrl+'/'+id, course)
  }

  deleteCourse(id:number){
    return this.httpCourse.delete(this.apiUrl+'/'+id)
  }
}

