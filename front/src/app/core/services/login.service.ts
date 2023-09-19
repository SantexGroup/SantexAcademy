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

  corroborarLogeo() {    
    let infoLocal = localStorage.getItem('resLog')
    if (infoLocal) {
      let newObject = JSON.parse(infoLocal);
      if(newObject){
      return newObject;
      }
    }
  }

  cambioVendedorServ(userId: string) {
    return this.apiService.put('/users/estado-vendedor/' + userId);
  }
}