import { Injectable } from '@angular/core';
import { ExperienceType } from '../interfaces/experienceType.interface';
import { Observable } from 'rxjs';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesTypeService {

  constructor(private api: ApiService) { }

  getExperienceType(): Observable<ExperienceType[]>{
    return this.api.get<ExperienceType[]>('experiences/types');
  }
}
