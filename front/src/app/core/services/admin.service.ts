import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { Credencial } from '../interfaces/credencial';
import { DatosLogin } from '../interfaces/datosLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private apiService:ApiService) { 

  }

  iniciarSesion(datosLogin:DatosLogin):Observable<Credencial>{

    return this.apiService.post('/administrator/login', datosLogin);
  }
}
