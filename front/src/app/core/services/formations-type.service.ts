import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormationsTypes } from '../interfaces/formationsTypes.interface';
import { ApiService } from '../http/api.service';


@Injectable({
  providedIn: 'root'
})
export class FormationsTypeService {

  constructor(private api: ApiService) { }

  getFormationType(): Observable<FormationsTypes[]>{
    return this.api.get<FormationsTypes[]>('formations/types');
  }
}
