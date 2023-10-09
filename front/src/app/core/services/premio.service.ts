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

  eliminar(idPremio:number):Observable<void>{

    return this.apiService.delete('/premios/delete-premios/'+idPremio);
  }

  canjear(idVoluntario:number, idPremio:number):Observable<Blob>{

    const datosPeticion = {
      volunteerId : idVoluntario,
      premioId : idPremio
    }

    return this.apiService.postDownload('/volunteer/canjear-premio', datosPeticion);
  }



}
