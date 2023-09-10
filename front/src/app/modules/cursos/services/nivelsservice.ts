import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Nivel } from 'src/app/models/nivel.interface';

@Injectable({
  providedIn: 'root'
})
export class NivelsService {

  private baseUrl: string = environment.API_URL;

  constructor( private http: HttpClient ) { }

  getNiveles(): Observable<Nivel[]>{
    return this.http.get<Nivel[]>(`${this.baseUrl}nivel`)
  }
}