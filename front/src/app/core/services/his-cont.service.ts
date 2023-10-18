import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class HisContService {

  constructor(private service: ApiService) { }

  infoComprador (id: number) {
    return this.service.get<any>('/users/' + id)
  }
  infoVendedor(id: number) {
    return this.service.get<any>('/users/' + id)
  }
  getCategories() {
    return this.service.get<any>('/productos/categories');
  }
  articulosContratados(id: number) {
    return this.service.get<any>('/vendedor/alquileres-vendedor/' + id);
  }
}
