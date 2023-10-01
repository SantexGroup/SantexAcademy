import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Docenteporcurso } from '../interfaces/docenteporcurso';

@Injectable({
  providedIn: 'root'
})
export class DocenteporcursoService {

  private baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getDocentesPorCurso(): Observable<Docenteporcurso[]>{
    return this.http.get<Docenteporcurso[]>(`${this.baseUrl}docenteporcurso`)
  }

  getDocentePorCursoPorId(id: number): Observable<Docenteporcurso>{
    return this.http.get<Docenteporcurso>(`${this.baseUrl}docenteporcurso/${ id }`)
  }

  addDocentePorCurso(docente: Docenteporcurso): Observable<Docenteporcurso> {
    return this.http.post<Docenteporcurso>(`${this.baseUrl}docenteporcurso`, docente);
  }

  editDocentePorCurso( docente: Docenteporcurso): Observable<Docenteporcurso> {
    return this.http.put<Docenteporcurso>(`${ this.baseUrl }docenteporcurso/${docente.id}`, docente)
  }

  habilitardocentePorCurso( docente: Docenteporcurso): Observable<Docenteporcurso> {
    return this.http.put<Docenteporcurso>(`${ this.baseUrl }docenteporcurso/${docente.id}`, docente)
  }
}
