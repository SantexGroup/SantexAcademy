import { Injectable } from '@angular/core';
import { Optionals } from '../interfaces/optionlas.interface';
import { Observable } from 'rxjs';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class OptionalsService {

  constructor(private api: ApiService) { }

  /* Metodo para obtener un optional por id de usuario */
  getOptional(id:number): Observable<Optionals>{
    return this.api.get<Optionals>(`optionals/${id}`);
  }

  /* Metodo para obtener un optional por id de usuario */
  getMyOptionals(id:number): Observable<Optionals[]> {
    return this.api.get<Optionals[]>(`optionals/by-user/${id}`);
  }

  /* Metodo para agregar opcionales a un perfil */
  addOptionals(optionals: Optionals): Observable<Optionals> {
    return this.api.post<Optionals>('optionals/', optionals);
  }

  /* Metodo para actualizar los opcionales de un perfil */
  updateOptionals(id:number, optionals:Optionals): Observable<void>{
    return this.api.put<void>(`optionals/${id}`, optionals);
  }

  /* Metodo para eliminar los opcionales de un perfil */
  deleteOptional(id:number): Observable<void>{
    return this.api.delete<void>(`optionals/${id}`);
  }
  
}
