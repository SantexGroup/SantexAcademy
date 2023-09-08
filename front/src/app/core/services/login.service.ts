import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  corLogServ: string = '';
  pasLogServ: string = '';
  

  constructor(private apiService: ApiService) {}    

  login(corLogServ: string, pasLogServ: string) {
    const body = {
      mail: corLogServ,
      password: pasLogServ,
    }
    return this.apiService.post<any>('/users/login', body)
  }

  usuarioLogeado(usuarioLogeado: boolean) {
    usuarioLogeado = true;
    return usuarioLogeado;
  }

  cambioVendedorServ(user: object) {
    const body = {
      id: user[0].id,
      // id: user[0],
      estadoDeVendedor: user.estadoVen,
      // estadoDeVendedor: estadoVen,
    }
    return this.apiService.put('/users/estado-vendedor/:id', body)
  }
}