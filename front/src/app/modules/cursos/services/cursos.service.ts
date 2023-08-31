import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../interface/cursos.interface'

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private baseUrl: string = environment.API_URL;

  constructor( private http: HttpClient ) { }

  getCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.baseUrl}curso`)
  }
}
