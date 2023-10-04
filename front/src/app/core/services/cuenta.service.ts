import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { DatosLogin } from '../interfaces/datosLogin';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Credencial } from '../interfaces/credencial';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private apiService:ApiService) { 

    this.credencialesUsuario = new BehaviorSubject<Credencial|null>(JSON.parse(localStorage.getItem('credencialesUsuario')!));

  }

  private credencialesUsuario:BehaviorSubject<Credencial|null>;

  get getCredencialesUsuario():Observable<Credencial|null>{
    return this.credencialesUsuario.asObservable();
  }

  set setCredencialesUsuario(value:Credencial|null){
    this.credencialesUsuario.next(value);
  }

  login(datosLogin:DatosLogin):Observable<Credencial>{

    return this.apiService.post<Credencial>('/cuentas/login', datosLogin).pipe(map((res)=>{
      console.log(res);
      this.credencialesUsuario.next(res);

      localStorage.setItem('credencialesUsuario',JSON.stringify(res));

      return res;
    }));
  }


}
