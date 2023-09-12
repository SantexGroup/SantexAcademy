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
    this.credencialesVoluntario = new BehaviorSubject<Credencial | null>(JSON.parse(localStorage.getItem('credencialesVoluntario')!));

    this.datosVoluntario = new BehaviorSubject<Voluntario | null>(null);
  }

  //Se declara el observable para controlar las credenciales del voluntario pero no se inicializa.
  private credencialesVoluntario:BehaviorSubject<Credencial | null>;

  get getCredencialesVoluntario(){
    return this.credencialesVoluntario.asObservable();
  }

  set setCredencialesVoluntario(valor:Credencial| null){
    this.credencialesVoluntario.next(valor);
  }

  private datosVoluntario:BehaviorSubject<Voluntario | null>;

  get getDatosVoluntario():Observable<Voluntario|null>{
    return this.datosVoluntario.asObservable();
  }

  set setDatosVoluntario(value:Voluntario){
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
      this.datosVoluntario.next(res);
    return res;
   }));
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

        localStorage.setItem('credencialesVoluntario', JSON.stringify(credenciales));
        
        return credenciales;

      })
    );
  }

  obtenerDatosVoluntario():Observable<Voluntario>{

    return this.apiService.get<Voluntario>("/volunteer/datos").pipe(
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
