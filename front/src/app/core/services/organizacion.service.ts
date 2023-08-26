import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Organizacion } from '../interfaces/organizacion';
import { Credencial } from '../interfaces/credencial';
import { DatosLogin } from '../interfaces/datosLogin';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {

  constructor(private apiService:ApiService) {

    this.credencialesOrganizacion = new BehaviorSubject<Credencial | null>(JSON.parse(localStorage.getItem('credencialesOrganizacion')!));
    this.datosOrganizacion = new BehaviorSubject<Organizacion | null>(null);
  }

  private credencialesOrganizacion:BehaviorSubject<Credencial | null>;

  get getCredencialesOrganizacion():Observable<Credencial| null>{
    
    return this.credencialesOrganizacion.asObservable();
  }

  set setCredencialesOrganizacion(value:Credencial|null){
    this.credencialesOrganizacion.next(value);
  }

  private datosOrganizacion:BehaviorSubject<Organizacion | null >;

  get getDatosOrganizacion():Observable<Organizacion|null>{
    return this.datosOrganizacion.asObservable();
  }


  

  crearOrganizacion(organizacion:Organizacion):Observable<Organizacion>{

   return this.apiService.post<Organizacion>("/coordinator/create-user",organizacion);
  }

  obtenerOrganizaciones():Observable<Organizacion[]>{
   return this.apiService.get<Organizacion[]>('/coordinator/get-all-coordinator');
  }

  obtenerOrganizacion(id:number):Observable<Organizacion>{
   return this.apiService.get<Organizacion>(`/coordinator/get-coordinator-by-id/${id}`);
  }

  modificarOrganizacion(id:number, organizacion:Organizacion):Observable<Organizacion>{
   return this.apiService.put<Organizacion>(`/coordinator/edit-user/${id}`,organizacion).pipe(
    map((res)=>{
      
      this.datosOrganizacion.next(res);

      return res;
    })
   );
  }

  eliminarOrganizacion(id:number):Observable<boolean>{
   return this.apiService.delete<boolean>(`/coordinator/delete-user/${id}`);
  }

  iniciarSesion(datosLogin:DatosLogin):Observable<Credencial>{
    return this.apiService.post<Credencial>("/coordinator/login", datosLogin).pipe(
      map((res)=>{

        const credenciales:Credencial = {
          token: res.token,
          tipoUsuario:'organizacion'
        };
        
        this.credencialesOrganizacion.next(credenciales);

        localStorage.setItem('credencialesOrganizacion', JSON.stringify(credenciales));
        return credenciales;
      })
    );
  }

  obtenerDatosOrganizacion():Observable<Organizacion>{
    return this.apiService.get<Organizacion>('/coordinator/datos').pipe(
      map((res)=>{
        this.datosOrganizacion.next(res);
        return res;
      })
    );
  }

  modificarPassword(id:number, passwordActual:string, passwordNueva:string):Observable<any>{
    const passwords = {
      currentPassword : passwordActual,
      newPassword: passwordNueva
    }

    return this.apiService.put("/coordinator/modify-password/"+id, passwords );
  }
}
