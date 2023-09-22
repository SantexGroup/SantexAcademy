import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class vistaArtIndServ {

  constructor(private apiService: ApiService) { }

  datosProdServ(id: number) {
    // console.log('/productos/obtener-producto-por-id/:' + idProd)
    return this.apiService.get<any>('/productos/obtener-producto-por-id/' + id)
  }

  getImageProduct(imageName: string){
    return this.apiService.get<any>('/images/' + imageName);
  }
}