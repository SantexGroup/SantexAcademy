import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienceStatus } from '../interfaces/experienceStatus.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesStatusService {

  constructor(private http: HttpClient) { }

  getExperieceStatus(): Observable<ExperienceStatus[]>{
    return this.http.get<ExperienceStatus[]>('http://localhost:3000/experiences/status');
  }

}
