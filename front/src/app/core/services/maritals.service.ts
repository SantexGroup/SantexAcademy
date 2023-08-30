import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marital } from '../interfaces/marital.interface';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class MaritalsService {

  constructor(private api: ApiService) { }

  getMaritals(): Observable<Marital[]>{
    return this.api.get<Marital[]>('marital/all');
  }

}
