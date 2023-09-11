import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interface';


@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private apiUrl= 'http://localhost:4001/course'

  constructor(private httpCourse: HttpClient) {}

    getCourses() {
      return this.httpCourse.get<Course[]>(this.apiUrl)
    }
  
    getCoursesById(id:number){
      return this.httpCourse.get<Course>(this.apiUrl+'/'+id)
    }
  
    postCourses(course: Course){
      return this.httpCourse.post(this.apiUrl, course)
    }
  
    putCourses(course: Course, id:number){
      return this.httpCourse.put(this.apiUrl+'/'+id, course)
    }
  }

