import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marital } from '../interfaces/marital.interface';

@Injectable({
  providedIn: 'root'
})
export class MaritalsService {

  constructor(private http: HttpClient) { }

  getMaritals(): Observable<Marital[]>{
    return this.http.get<Marital[]>('http://localhost:3000/marital/all');
  }

}
