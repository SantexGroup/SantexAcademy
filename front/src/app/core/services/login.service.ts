import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  corLogServ: string = '';
  pasLogServ: string = '';
  usuarioLogeado: boolean = false;

  constructor(private apiService: ApiService) {}    

  login(corLogServ: string, pasLogServ: string) {
    const body = {
      mail: corLogServ,
      password: pasLogServ,
    }
    return this.apiService.post('/login', body)
  }

}  
       



      
