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
  getMyOptionals(id:number): Observable<Optionals[]> {
    return this.api.get<Optionals[]>(`optionals/by-user/${id}`)
  }

  /* Metodo para agregar opcionales a un perfil */
  addOptionals(optionals: Optionals): Observable<Optionals> {
    return this.api.post<Optionals>('optionals/', optionals)
  }

  /* Metodo para actualizar los opcionales de un perfil */
  updateOptionals(optionals: Optionals): Observable<Optionals>{
    return this.api.put<Optionals>('optionals/:id', optionals)
  }
}
