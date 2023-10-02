import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class ModArtService {

  constructor(private apiService: ApiService) { }

  modificar(
    idProd: any,
    idUser: any,
    catReg: any,
    nomReg: any,
    desReg: any,
    preReg: any,
    envReg: any,
    ){
      const body={
        idUsuario : idUser,
        idTipoProducto: catReg,
        nombre: nomReg,
        detalles: desReg,
        precio: preReg,
        envio: envReg
      }
      return this.apiService.put<any>('/productos/modificar-articulo/' + idProd, body)
    }
  
    cargaFiles(formData: any) {
      return this.apiService.post<any>('/upload', formData);
    }
  
    cargaImagesNames(idProducto: string, imageName: string) {
      return this.apiService.post<any>('/images/'+ imageName + '/' + idProducto);
    }
}