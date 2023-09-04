import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { Observable } from 'rxjs';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private apiService:ApiService) { }

  crearTarea(nuevaTarea:Tarea):Observable<Tarea>{
    return this.apiService.post('/tarea/create-tarea', nuevaTarea);
  }
}
