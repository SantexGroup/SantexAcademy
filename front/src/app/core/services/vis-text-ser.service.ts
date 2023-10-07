import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class VisTextSerService {

  constructor(private service: ApiService) { }

  traerProductos(id: number) {
    return this.service.get<any>('/obtener-producto-por-id/' + id)
  }

}
