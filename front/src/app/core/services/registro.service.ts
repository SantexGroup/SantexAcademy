import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  corRegServ: string = '';
  pasRegServ: string = '';
  pas2RegServ: string = '';
  nomRegServ: string = '';
  apeRegServ: string = '';
  dniRegServ: string = '';
  nacRegServ: string = '';
  dirRegServ: string = '';
  codRegServ: string = '';


  constructor(private apiService: ApiService) { }

  registro(
    corRegServ: string, 
    pasRegServ: string, 
    pas2RegServ: string, 
    nomRegServ: string, 
    apeRegServ: string,
    dniRegServ: string,
    nacRegServ: string,
    dirRegServ: string,
    codRegServ: string) {
    const body = {
      nombre: this.nomRegServ,
      apelido: this.apeRegServ,
      DNI: this.dniRegServ,
      mail: corRegServ,
      password: pasRegServ,
      CalleYAltura: this.dirRegServ,
      CodigoPostal: this.codRegServ,
    }
    return this.apiService.post('/user-register', body)
  }
}
