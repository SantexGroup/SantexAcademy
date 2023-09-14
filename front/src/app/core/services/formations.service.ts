import { Injectable } from '@angular/core';
import { Formations } from '../interfaces/formation.interface';
import { Observable } from 'rxjs';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  constructor(private api: ApiService ) { }

  addFormation(formation: Formations): Observable<Formations> {
    return this.api.post<Formations>('formations/', formation);
  }
  

  getFormationByUser(id?: number): Observable<Formations[]>{
    return this.api.get<Formations[]>(`formations/${id}`);
  }

  deleteFormation(id: number): Observable<void>{
    return this.api.delete<void>(`formations/${id}`)
  }
  updateFormation(formation: Formations): Observable<Formations> {
    return this.api.put<Formations>(`formations/${formation.id}`, formation);
  }
  
}
