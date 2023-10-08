import { Injectable } from '@angular/core';
import { baseURL } from 'src/config';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = baseURL;

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/api/course`);
  }

  getCourseById(courseId: string): Observable<any> {
    const url = `${this.apiUrl}/api/course/${courseId}`;
    return this.http.get(url);
  }

  updateCourse(course: Course): Observable<any> {
    const url = `${this.apiUrl}/api/course/${course.id}`;
    return this.http.put(url, course);
  }

  deleteCourseById(courseId: number): Observable<any> {
    const url = `${this.apiUrl}/api/course/${courseId}`;
    return this.http.delete(url);
  }

  
  getCoursesByPattern(name: string, by: 'ByName' | 'byProfesor'): Observable<any[]> {
    const params = new HttpParams()
      .set('name', name)
      .set('by', by);

    return this.http.get<any[]>(`${this.apiUrl}/api/course/search`, { params });
  }
 
}

