import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Organizacion } from '../interfaces/organizacion';
import { Credencial } from '../interfaces/credencial';
import { DatosLogin } from '../interfaces/datosLogin';
import { ResumenOrganizacion } from '../interfaces/resumenOrganizacion';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {

  constructor(private apiService:ApiService) {

    this.datosOrganizacion = new BehaviorSubject<ResumenOrganizacion | null>(null);
  }


  private datosOrganizacion:BehaviorSubject<ResumenOrganizacion | null >;

  get getDatosOrganizacion():Observable<ResumenOrganizacion|null>{
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
      
      const nuevosDatos = this.datosOrganizacion.value;
      nuevosDatos!.coordinador = res;

      this.datosOrganizacion.next(nuevosDatos);

      return res;
    })
   );
  }

  eliminarOrganizacion(id:number):Observable<boolean>{
   return this.apiService.delete<boolean>(`/coordinator/delete-user/${id}`);
  }


  obtenerDatosOrganizacion():Observable<ResumenOrganizacion>{
    return this.apiService.get<ResumenOrganizacion>('/coordinator/datos').pipe(
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
