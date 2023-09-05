
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienceStatus } from '../interfaces/experienceStatus.interface';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesStatusService {

  constructor(private api: ApiService) { }
  /* Metodo para obtener todos los estados dispobiles desde la APP */
  getExperieceStatus(): Observable<ExperienceStatus[]>{
    return this.api.get<ExperienceStatus[]>('experiences/status');
  }

}
