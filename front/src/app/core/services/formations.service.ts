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
}
