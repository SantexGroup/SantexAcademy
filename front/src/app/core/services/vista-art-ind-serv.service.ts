import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class vistaArtIndServ {

  constructor(private apiService: ApiService) { }

  // datosProdServ(IDProd: number) {
  //   const body = {
  //     IDProducto: IDProd,
  //   }
  //   return this.apiService.get('/products/obtener-producto-por-id/:id', body)
  // }
}