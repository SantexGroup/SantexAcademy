import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Docente } from '../interfaces/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getDocentes(): Observable<Docente[]>{
    return this.http.get<Docente[]>(`${this.baseUrl}docente`)
  }

  addDocente(docente: Docente): Observable<Docente> {
    return this.http.post<Docente>(`${this.baseUrl}docente`, docente);
  }
}
