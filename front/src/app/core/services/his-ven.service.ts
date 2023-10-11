import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class HisVenService {

  constructor(private service: ApiService) { }
  infoVendedor(id: number) {
    return this.service.get<any>('/users/' + id);
  }
  getCategories() {
    return this.service.get<any>('/productos/categories');
  }
  articulosVendedor(id: number) {
    return this.service.get<any>('/productos/productos-por-vendedor/' + id);
  }
  
  
  eliminarArticulo(id: number) {
    return this.service.delete('/productos/eliminar-articulo/' + id);
  }
}
