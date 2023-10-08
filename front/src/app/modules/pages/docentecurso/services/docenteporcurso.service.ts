import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Docenteporcurso } from '../interfaces/docenteporcurso';
import { Curso } from 'src/app/modules/cursos/interface/cursos.interface';


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
    console.log("Llamando a getDocentePorCursoPorId")
    return this.http.get<Docenteporcurso>(`${this.baseUrl}docenteporcurso/${ id }`)
  }
  //-----------------Agrego para busacr los cursos de un docente------------//
  getCursoPorDocentePorID(id: number): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.baseUrl}docenteporcurso/${ id }/cursos`)
  }
  //-------------------------------------------------------------------------//
  addDocentePorCurso(docente: Docenteporcurso): Observable<Docenteporcurso> {
    return this.http.post<Docenteporcurso>(`${this.baseUrl}docenteporcurso`, docente);
  }

  editDocentePorCurso( docente: Docenteporcurso): Observable<Docenteporcurso> {
    return this.http.put<Docenteporcurso>(`${ this.baseUrl }docenteporcurso/${docente.id}`, docente)
  }

  habilitardocentePorCurso( docente: Docenteporcurso): Observable<Docenteporcurso> {
    return this.http.put<Docenteporcurso>(`${ this.baseUrl }docenteporcurso/${docente.id}`, docente)
  }

  getCursosPorDocenteId(idDocente: number): Observable<Docenteporcurso[]> {
    console.log("Llamando a getCursosPorDocenteId")
    const url = `${this.baseUrl}docenteporcurso/iddocente/${idDocente}`; 

    return this.http.get<Docenteporcurso[]>(url);
  }

  habilitardocenteporcurso( docenteporcurso: Docenteporcurso): Observable<Docenteporcurso> {
    return this.http.put<Docenteporcurso>(`${ this.baseUrl }docenteporcurso/${docenteporcurso.id}`, docenteporcurso)
  }

  deleteDocentePorCurso( id: number ): Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl }docenteporcurso/${id}`)
  } 
}
