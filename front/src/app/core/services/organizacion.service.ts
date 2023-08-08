import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { Observable } from 'rxjs';
import { Organizacion } from '../interfaces/organizacion';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {

  constructor(private apiService:ApiService) {

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

  modificarOrganizacion(organizacion:Organizacion):Observable<Organizacion>{
   return this.apiService.put<Organizacion>(`/coordinator/edit-user/${organizacion.id_coordinator}`);
  }

  eliminarOrganizacion(id:number):Observable<boolean>{
   return this.apiService.delete<boolean>(`/coordinator/delete-user/${id}`);
  }
}
