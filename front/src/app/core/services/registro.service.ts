import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  corRegServ: string = '';
  pasRegServ: string = '';
  aliRegServ: string = '';
  nomRegServ: string = '';
  apeRegServ: string = '';
  dniRegServ: string = '';
  proRegServ: string = '';
  locRegServ: string = '';
  dirRegServ: string = '';

  idProv: string = '';


  constructor(private apiService: ApiService) { }

  registro(
    corRegServ: string, 
    pasRegServ: string, 
    aliRegServ: string, 
    nomRegServ: string, 
    apeRegServ: string,
    dniRegServ: string,
    proRegServ: string,
    locRegServ: string,
    dirRegServ: string) {
    const body = {
      firstName: nomRegServ,
      lastName: apeRegServ,
      dni: dniRegServ,
      mail: corRegServ,
      password: pasRegServ,
      alias: aliRegServ,
      CalleYAltura: dirRegServ
    }
    return this.apiService.post('/users/user-register', body)
  }

  getProvincias() {
    return this.apiService.get<any>('/direccion/provincias');
  }

  getLocalidades(idProv: string) {
    return this.apiService.get<any>('/direccion/localidades/' + idProv);
  }
}

