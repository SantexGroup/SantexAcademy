import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Especialidad } from '../interfaces/especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  private baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getEspecialidades(): Observable<Especialidad[]>{
    return this.http.get<Especialidad[]>(`${this.baseUrl}especialidad`)
  }
}
