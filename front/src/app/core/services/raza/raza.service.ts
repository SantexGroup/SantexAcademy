import { Injectable } from '@angular/core';
import { ApiService } from '../../http/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RazaService {

  constructor(private http : ApiService) { }

  cargaSelect(){
    return this.http.get('breeds/list');
    
  }
 
}
