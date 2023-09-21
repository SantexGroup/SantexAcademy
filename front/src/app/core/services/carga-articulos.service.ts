
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class CargaArticulosService {

  constructor(private apiService: ApiService) { }

  carga(
  catReg: string,
  nomReg: string,
  desReg: string,
  preReg: string,
  envReg: string,
  idUser: string,
  ){
    const body={
      idUsuario : idUser,
      idTipoProducto: catReg,
      nombre: nomReg,
      detalles: desReg,
      precio: preReg,
      envio: envReg
    }
    return this.apiService.post('/productos/cargar-producto', body)
  }

  cargaFiles(formData: any) {
    return this.apiService.post<any>('/upload', formData);
  }
}