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

}
