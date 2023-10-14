import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sexs } from '../interfaces/sex.interface';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private api: ApiService) { }

  getSexs(): Observable<Sexs[]>{
    return this.api.get<Sexs[]>('gender/all');
  }
}
