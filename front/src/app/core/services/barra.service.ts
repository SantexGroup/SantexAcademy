import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class BarraService {

  constructor(private apiservice: ApiService) { }

  getCategories() {
    return this.apiservice.get<any>("/productos/categories")
  }
  getProducts() {
    return this.apiservice.get<any>('/productos/products/')
  }
}
