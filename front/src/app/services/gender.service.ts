import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sexs } from '../interfaces/sex.interface';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private http: HttpClient) { }

  getSexs(): Observable<Sexs[]>{
    return this.http.get<Sexs[]>('http://localhost:3000/gender/all');
  }
}
