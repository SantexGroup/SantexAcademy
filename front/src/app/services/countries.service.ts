import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Countries } from '../interfaces/country.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Countries[]> {
    return this.http.get<Countries[]>('http://localhost:3000/countries/all');
  }
}
