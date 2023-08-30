
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienceStatus } from '../interfaces/experienceStatus.interface';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesStatusService {

  constructor(private api: ApiService) { }

  getExperieceStatus(): Observable<ExperienceStatus[]>{
    return this.api.get<ExperienceStatus[]>('experiences/status');
  }

}
