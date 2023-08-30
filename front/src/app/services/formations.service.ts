import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formations } from '../interfaces/formation.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  constructor(private http:HttpClient ) { }

  addFormation(formation: Formations): Observable<Formations> {
    return this.http.post<Formations>('http://localhost:3005/formations/', formation);
  }

}
