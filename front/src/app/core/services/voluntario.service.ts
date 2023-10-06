import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { Voluntario } from '../interfaces/voluntario';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Credencial } from '../interfaces/credencial';
import { ResumenVoluntario } from '../interfaces/resumenVoluntario';

@Injectable({
  providedIn: 'root'
})
export class VoluntarioService {

  constructor(private apiService:ApiService) {
   

    this.datosVoluntario = new BehaviorSubject<ResumenVoluntario | null>(null);
  }


  private datosVoluntario:BehaviorSubject<ResumenVoluntario | null>;

  get getDatosVoluntario():Observable<ResumenVoluntario|null>{
    return this.datosVoluntario.asObservable();
  }

  set setDatosVoluntario(value:ResumenVoluntario){
    this.datosVoluntario.next(value);
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

  modificarVoluntario(id:number, voluntario:Voluntario):Observable<Voluntario>{
   return this.apiService.put<Voluntario>(`/volunteer/edit-user/${id}`,voluntario).pipe(
    map((res)=>{

      const nuevoDatosvoluntario:ResumenVoluntario = this.datosVoluntario.value!;
      
      nuevoDatosvoluntario.voluntario = res;
      this.datosVoluntario.next(nuevoDatosvoluntario);
    return res;
   }));
  }

  eliminarVoluntario(id:number):Observable<boolean>{
   return this.apiService.delete<boolean>(`/volunteer/delete-user/${id}`);
  }

  obtenerDatosVoluntario():Observable<ResumenVoluntario>{

    return this.apiService.get<ResumenVoluntario>("/volunteer/datos").pipe(
      map((res)=>{
        this.datosVoluntario.next(res);
        return res;
      })
    );
  }

  modificarPassword(id:number, passwordActual:string, passwordNueva:string):Observable<any>{
    const passwords = {
      currentPassword : passwordActual,
      newPassword: passwordNueva
    }

    return this.apiService.put("/volunteer/modify-password/"+id, passwords );
  }
}
