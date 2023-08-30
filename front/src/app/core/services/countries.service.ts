import { Injectable } from '@angular/core';
import { Countries } from '../interfaces/country.interface';
import { Observable } from 'rxjs';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private api: ApiService,
    ) { }

  getCountries(): Observable<Countries[]> {
    return this.api.get<Countries[]>('countries/all');
  }
}
