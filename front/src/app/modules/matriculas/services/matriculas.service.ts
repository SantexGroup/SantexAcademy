/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Matricula } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {

  private baseUrl: string = environment.API_URL;

  constructor( private http: HttpClient ) { }

  addMatricula( matricula: Matricula): Observable<Matricula> {
    console.log('addmatricula :', this.http.post<Matricula>(`${ this.baseUrl }matricula`, matricula))
    return this.http.post<Matricula>(`${ this.baseUrl }matricula`, matricula)
  }
  

}
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Matricula } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {

  private baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getMatriculas(): Observable<Matricula[]>{
    return this.http.get<Matricula[]>(`${this.baseUrl}matricula`)
  }

  addMatricula(matricula: Matricula): Observable<Matricula> {
    return this.http.post<Matricula>(`${this.baseUrl}matricula`, matricula);
  }

  // obtenerCursosInscritos(userId: number): Observable<string[]> {
  //   return this.http.get<string[]>(`${this.baseUrl}cursos-inscritos/${userId}`);  
  // }

  //---------Copio anterior que creo que esta mal--------- -////
  obtenerCursosInscritos(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}user/${id}/cursos`);
  }
  //-------------------------------------------------------//
  //---------Trae los cursos con matricula de un usuario----------/// 
  obtenerCursosConMatricula(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}user/${id}/matricula`);
  }
  //-------------------------------------------------------//
  //---------Trae las matriculas de un usuario----------/// 
  getMatriculaByUserId(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}user/${id}/usermatricula`);
  }
  //-------------------------------------------------------//
  
  habilitarmatricula( matricula: Matricula): Observable<Matricula> {
    return this.http.put<Matricula>(`${ this.baseUrl }matricula/${matricula.id}`, matricula)
  }
  
  deleteMatricula( id: number ): Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl }matricula/${id}`)
  }

}
