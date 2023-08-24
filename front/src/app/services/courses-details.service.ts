import { Injectable } from '@angular/core';
import { CoursesDetail } from '../core/interface/courses-detail.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesDetailsService {

  courses: CoursesDetail[] = []

  private endpointDetail = 'http://localhost:4001/coursesDetail' 

  constructor(private http: HttpClient) {} 

  getPosts():Observable<CoursesDetail[]> { 

    return this.http.get<CoursesDetail[]>(this.endpointDetail) 

  }
}
