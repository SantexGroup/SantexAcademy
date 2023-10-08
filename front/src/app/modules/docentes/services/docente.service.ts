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

  getDocentePorId(id: number): Observable<Docente>{
    return this.http.get<Docente>(`${this.baseUrl}docente/${ id }`)
  }
  //----------------Agrego para buscar docente por id usuario------//
  getDocenteIdByuserId(id: number): Observable<number>{
    return this.http.get<number>(`${this.baseUrl}docente/userdocente/${ id }`)
  }
  //--------------------------------------------------------------//
  addDocente(docente: Docente): Observable<Docente> {
    return this.http.post<Docente>(`${this.baseUrl}docente`, docente);
  }

  editDocente( docente: Docente): Observable<Docente> {
    return this.http.put<Docente>(`${ this.baseUrl }docente/${docente.id}`, docente)
  }

  habilitardocente( docente: Docente): Observable<Docente> {
    return this.http.put<Docente>(`${ this.baseUrl }docente/${docente.id}`, docente)
  }

  deleteDocente( id: number ): Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl }docente/${id}`)
  }
}
