import { Injectable } from '@angular/core';
import { Experience } from '../interfaces/experience.interface';
import { Observable } from 'rxjs';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  constructor(private api: ApiService) { }

  addExperience(experience: Experience): Observable<Experience> {
    return this.api.post<Experience>('experiences/add', experience);
  }

  getExperience(id: number): Observable<Experience[]>{
    return this.api.get<Experience[]>(`experiences/all/${id}`);
  }

  updateExperience(id:number, experience:Experience): Observable<void>{
    return this.api.put<void>(`experiences/update/${id}`, experience);
  }

  deleteExperience(id:number): Observable<void>{
    return this.api.delete<void>(`experiences/delete/${id}`);
  }

}
