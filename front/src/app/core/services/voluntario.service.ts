import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { Voluntario } from '../interfaces/voluntario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoluntarioService {

  constructor(private apiService:ApiService) {

  }



  crearVoluntario(voluntario:Voluntario):Observable<Voluntario>{

   return this.apiService.post<Voluntario>("/volunteer/create-user",voluntario);
  }

  obtenerVoluntarios():Observable<Voluntario[]>{
   return this.apiService.get<Voluntario[]>('/volunteer/get-all-volunteer');
  }

  obtenerVoluntario(id:number):Observable<Voluntario>{
   return this.apiService.get<Voluntario>(`/volunteer/get-volunteer-by-id/${id}`);
  }

  modificarVoluntario(voluntario:Voluntario):Observable<Voluntario>{
   return this.apiService.put<Voluntario>(`/volunteer/edit-user/${voluntario.id_volunteer}`);
  }

  eliminarVoluntario(id:number):Observable<boolean>{
   return this.apiService.delete<boolean>(`/volunteer/delete-user/${id}`);
  }
}
