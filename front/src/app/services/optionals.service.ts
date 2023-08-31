import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Optionals } from '../interfaces/optionlas.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionalsService {

  constructor(private http: HttpClient) { }

  addOptionals(optionals: Optionals): Observable<Optionals> {
    return this.http.post<Optionals>('http://localhost:3000/optionals/', optionals)
  }

  updateOptionals(optionals: Optionals): Observable<Optionals>{
    return this.http.put<Optionals>('http://localhost:3000/optionals/:id', optionals)
  }
}
