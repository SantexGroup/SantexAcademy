import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class EditarUsuarioService {

  corRegServ: string = '';
  pasRegServ: string = '';
  aliRegServ: string = '';
  nomRegServ: string = '';
  apeRegServ: string = '';
  dniRegServ: string = '';
  locRegServ: string = '';
  dirRegServ: string = '';

  idProv: string = '';

  idUser: string = '';


  constructor(private apiService: ApiService) { }

  modificarUsuario(
    corRegServ: string, 
    pasRegServ: string, 
    aliRegServ: string, 
    nomRegServ: string, 
    apeRegServ: string,
    dniRegServ: string,
    locRegServ: string,
    dirRegServ: string,
    idUser: string) {
    const body = {
      firstName: nomRegServ,
      lastName: apeRegServ,
      dni: dniRegServ,
      mail: corRegServ,
      password: pasRegServ,
      alias: aliRegServ,
      idLocalidad: locRegServ,
      calleYAltura: dirRegServ
    }
    console.log(body);
    return this.apiService.put('/users/edit/' + idUser, body)
  }

  getProvincias() {
    return this.apiService.get<any>('/direccion/provincias');
  }

  getLocalidades(idProv: string) {
    return this.apiService.get<any>('/direccion/localidades/' + idProv);
  }

  eliminarUsuario(id: number) {
    console.log('se eliminio usuario con el ID' + " " + id);
    return this.apiService.delete('/users/delete/' + id);
  }
  
  
}

