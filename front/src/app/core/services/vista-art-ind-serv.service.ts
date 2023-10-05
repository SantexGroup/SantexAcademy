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
  datosUsuario(idUser: number) {
    const id= idUser;
    return this.apiService.get<any>('/users/' + id)
  }
  dias(idProd: number) {
    const id = idProd;
    return this.apiService.get<any>('/alquiler/' + id)
  }
  getImageProduct(imageName: string){
    return this.apiService.get<any>('/images/' + imageName);
  }
  newAlquiler(
    idProducto: number,
    idComprador: string,
    modoEnvio: boolean,
    dias: number,
    formaPago: string
    ) {
      const body = {
        idComprador: idComprador, 
        modoEnvio: modoEnvio,
        dias: dias,
        formaPago: formaPago
      }
    return this.apiService.post<any>('/alquiler/new/' + idProducto, body);
  }
}