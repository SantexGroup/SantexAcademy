import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interface';


@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private httpCourse: HttpClient) {}

    getCourses() {
      return this.httpCourse.get<Course[]>('/api/course')
    }
  
    getCoursesById(id:number){
      return this.httpCourse.get<Course>('/api/course'+'/'+id)
    }
  
    postCourses(course: Course){
      return this.httpCourse.post('/api/course', course)
    }
  
    putCourses(course: Course, id:number){
      return this.httpCourse.put('/api/course'+'/'+id, course)
    }
  }

