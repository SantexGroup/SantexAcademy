import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Curso } from '../interface/cursos.interface'
import { environment } from 'src/environments/environment';
import { Nivel } from 'src/app/models/nivel.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private baseUrl: string = environment.API_URL;

  constructor( private http: HttpClient ) { }

  getCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.baseUrl}curso`)
  }

  getNiveles(): Observable<Nivel[]>{
    return this.http.get<Nivel[]>(`${this.baseUrl}nivel`)
  }

  getCursoPorId(id: number): Observable<Curso>{
    return this.http.get<Curso>(`${this.baseUrl}curso/${ id }`)
  }

  addCurso( curso: Curso): Observable<Curso> {
    console.log('addCurso :', this.http.post<Curso>(`${ this.baseUrl }curso`, curso))
    return this.http.post<Curso>(`${ this.baseUrl }curso`, curso)
  }
  
  editCurso( curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${ this.baseUrl }curso/${curso.id}`, curso)
  }

  deleteCurso( id: number ): Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl }curso/${id}`)
  }

  activardesactivar( curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${ this.baseUrl }curso/${curso.id}`, curso)
  }
  
}