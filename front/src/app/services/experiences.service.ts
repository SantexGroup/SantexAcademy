import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience } from '../interfaces/experience.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  constructor(private http: HttpClient) { }

  addExperience(experience: Experience): Observable<Experience> {
    return this.http.post<Experience>('http://localhost:3005/experiences/add', experience);
  }

}
