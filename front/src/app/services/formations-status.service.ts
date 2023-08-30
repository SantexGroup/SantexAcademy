import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormationsStatus } from '../interfaces/formationsStatus.interface';


@Injectable({
  providedIn: 'root'
})
export class FormationsStatusService {

  constructor(private http: HttpClient) { }

  getFormationStatus(): Observable<FormationsStatus[]>{
    return this.http.get<FormationsStatus[]>('http://localhost:3005/formations/status');
  }
}
