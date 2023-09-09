import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { Credencial } from '../interfaces/credencial';
import { DatosLogin } from '../interfaces/datosLogin';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private apiService:ApiService) { 

    this.credencialesAdmin = new BehaviorSubject< Credencial | null >(JSON.parse(localStorage.getItem('credencialesAdmin')!));
  }

  credencialesAdmin:BehaviorSubject<Credencial | null>;

  get getCredencialesAdmin(){
    return this.credencialesAdmin.asObservable();
  }

  set setCredencialesAdmin(value:Credencial|null){
    this.credencialesAdmin.next(value);
  }


  iniciarSesion(datosLogin:DatosLogin):Observable<Credencial>{

    return this.apiService.post<Credencial>('/administrator/login', datosLogin).pipe(
      map((res)=>{

        const credenciales:Credencial={
          token:res.token,
          tipoUsuario:'admin'
        }
        
        localStorage.setItem('credencialesAdmin',JSON.stringify(credenciales));

        this.credencialesAdmin.next(credenciales);
        return res;
      })
      );
  }
}
