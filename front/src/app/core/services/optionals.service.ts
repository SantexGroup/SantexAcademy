import { Injectable } from '@angular/core';
import { Optionals } from '../interfaces/optionlas.interface';
import { Observable } from 'rxjs';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class OptionalsService {

  constructor(private api: ApiService) { }

  addOptionals(optionals: Optionals): Observable<Optionals> {
    return this.api.post<Optionals>('optionals/', optionals)
  }

  updateOptionals(optionals: Optionals): Observable<Optionals>{
    return this.api.put<Optionals>('optionals/:id', optionals)
  }
}
