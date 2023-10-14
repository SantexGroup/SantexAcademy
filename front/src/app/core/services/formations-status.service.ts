import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormationsStatus } from '../interfaces/formationsStatus.interface';
import { ApiService } from '../http/api.service';


@Injectable({
  providedIn: 'root'
})
export class FormationsStatusService {

  constructor(private api: ApiService) { }

  getFormationStatus(): Observable<FormationsStatus[]>{
    return this.api.get<FormationsStatus[]>('formations/status');
  }
}
