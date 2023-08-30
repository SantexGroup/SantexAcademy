import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormationsTypes } from '../interfaces/formationsTypes.interface';


@Injectable({
  providedIn: 'root'
})
export class FormationsTypeService {

  constructor(private http:HttpClient) { }

  getFormationType(): Observable<FormationsTypes[]>{
    return this.http.get<FormationsTypes[]>('http://localhost:3005/formations/types');
  }


}
