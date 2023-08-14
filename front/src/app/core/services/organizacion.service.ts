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

    this.credencialesOrganizacion = new BehaviorSubject<Credencial | null>(null);
  }

  credencialesOrganizacion:BehaviorSubject<Credencial | null>;
  

  crearOrganizacion(organizacion:Organizacion):Observable<Organizacion>{

   return this.apiService.post<Organizacion>("/coordinator/create-user",organizacion);
  }

  obtenerOrganizaciones():Observable<Organizacion[]>{
   return this.apiService.get<Organizacion[]>('/coordinator/get-all-coordinator');
  }

  obtenerOrganizacion(id:number):Observable<Organizacion>{
   return this.apiService.get<Organizacion>(`/coordinator/get-coordinator-by-id/${id}`);
  }

  modificarOrganizacion(organizacion:Organizacion):Observable<Organizacion>{
   return this.apiService.put<Organizacion>(`/coordinator/edit-user/${organizacion.id_coordinator}`);
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
        return credenciales;
      })
    );
  }
}
