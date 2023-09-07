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
    return this.apiService.post('/users/login', body)
  }
<<<<<<< HEAD
=======
}  
       
>>>>>>> 81a16b1ebf8c94440e9cad8c6818fc7ce6635c84

  usuarioLogeado(usuarioLogeado: boolean) {
    usuarioLogeado = true;
    return usuarioLogeado;
  }
}