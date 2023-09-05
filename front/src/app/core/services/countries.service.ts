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
    
  /* Metodo para obtener las lista de paises publicados en la Base de datos.*/
  getCountries(): Observable<Countries[]> {
    return this.api.get<Countries[]>('countries/all');
  }
}
