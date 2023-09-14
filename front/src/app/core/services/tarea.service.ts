import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { Observable } from 'rxjs';
import { Tarea } from '../interfaces/tarea';
import { Voluntario } from '../interfaces/voluntario';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private apiService:ApiService) { }

  
  getTareas():Observable<Tarea[]>{
    return this.apiService.get('/tarea/get-all');
  }

  getTareasPorIdOrg():Observable<Tarea[]>{

    return this.apiService.get('/tarea/get-by-id-organizacion');
  }
  
  crearTarea(nuevaTarea:Tarea):Observable<Tarea>{
    return this.apiService.post('/tarea/create-tarea', nuevaTarea);
  }

  modificarTarea(id:number, tarea:Tarea):Observable<Tarea>{
    
    return this.apiService.put('/tarea/edit-tarea/'+id,tarea);
  }

  eliminarTarea(id:number):Observable<any>{

    return this.apiService.delete('/tarea/delete-tarea/'+id);
  }

  modificarEstado(id:number,nuevoEstado:string):Observable<void>{
    return this.apiService.put('/tarea/cambiar-estado/'+id, {nuevoEstado});
  }

  inscribirVoluntario(idTarea:number, idVoluntario:number):Observable<Voluntario>{

    const parametros = {
      idVolunteer:idVoluntario,
      idTarea
    }
    return this.apiService.put('/volunteer/asign-work/'+idTarea, parametros);

  }

  getInscriptos(idTarea:number):Observable<Voluntario[]>{
    
    return this.apiService.get('/tarea/inscriptos/'+idTarea);
  }

}
