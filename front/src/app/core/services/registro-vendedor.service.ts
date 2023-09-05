import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroVendedorService {

  constructor(private apiService: ApiService) { }

  registroVendedor() {
    return this.apiService.post('/user-register', body)
  }
}
