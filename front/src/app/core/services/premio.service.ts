import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { Observable } from 'rxjs';
import { Premio } from '../interfaces/premio';

@Injectable({
  providedIn: 'root'
})
export class PremioService {

  constructor(private apiService:ApiService) { }


  mostrar():Observable<Premio[]>{

    return this.apiService.get('/premios/get-all');
  }

  crear(nuevoPremio:Premio):Observable<Premio>{
    
    return this.apiService.post('/premios/create-premios', nuevoPremio);
  }

  modificar(idPremio:number, premioModificado:Premio):Observable<Premio>{

    return this.apiService.put('/premios/edit-premios/'+idPremio,premioModificado);
  }



}
