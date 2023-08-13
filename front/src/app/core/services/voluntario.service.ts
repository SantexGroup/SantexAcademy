import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { Voluntario } from '../interfaces/voluntario';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Credencial } from '../interfaces/credencial';

@Injectable({
  providedIn: 'root'
})
export class VoluntarioService {

  constructor(private apiService:ApiService) {
   
    //Se crea el observable en null cuando arranca la aplicación, porque todavia no inició sesión el voluntario.
    this.credencialesVoluntario = new BehaviorSubject<Credencial | null>(null);
  }

  //Se declara el observable para controlar las credenciales del voluntario pero no se inicializa.
  credencialesVoluntario:BehaviorSubject<Credencial | null>;


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

  iniciarSesion(credenciales:any):Observable<Credencial>{
    return this.apiService.post<Credencial>('/volunteer/login',credenciales).pipe(
      //Se crea un pipe para manipular la respuesta de la peticion y se crea un objeto de tipo credencial
      // para poder mandarle las nuevas credenciales al observable credencialesVoluntario

      map((res)=>{
        
        const credenciales:Credencial = {
          token:res.token,
          tipoUsuario:'voluntario'
        }

        this.credencialesVoluntario.next(credenciales);
        
        return credenciales;

      })
    );
  }
}
