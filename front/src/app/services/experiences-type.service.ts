import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExperienceType } from '../interfaces/experienceType.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesTypeService {

  constructor(private http: HttpClient) { }

  getExperienceType(): Observable<ExperienceType[]>{
    return this.http.get<ExperienceType[]>('http://localhost:3000/experiences/types');
  }
}
