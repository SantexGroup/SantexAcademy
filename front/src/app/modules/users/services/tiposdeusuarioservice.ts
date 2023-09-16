import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TipoDeUsuario } from '../interface/tipodeusuario.interface';

@Injectable({
  providedIn: 'root'
})
export class TiposDeUsuarioService {

  private baseUrl: string = environment.API_URL;

  constructor( private http: HttpClient ) { }

  getTiposDeUsuario(): Observable<TipoDeUsuario[]>{
    return this.http.get<TipoDeUsuario[]>(`${this.baseUrl}tipodeusuario`)
  }

}
