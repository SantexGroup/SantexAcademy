import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmacionArticuloServService {

  constructor(private apiService: ApiService) { }

  datosProd(id: string) {
    return this.apiService.get<any>('/productos/obtener-producto-por-id/' + id);

  }

}
