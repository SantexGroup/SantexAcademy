import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class vistaArtIndServ {

  constructor(private apiService: ApiService) { }

  datosProdServ(idProd: number) {
    const body = {
      id: idProd,
    }
    return this.apiService.get('/productos/obtener-producto-por-id/:id', body)
  }
}