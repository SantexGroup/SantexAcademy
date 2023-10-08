import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  getByCategory(id: string) {
    return this.apiservice.get<any>(`/productos/categories/${id}`);
  }

  constructor(private apiservice: ApiService) { }
}
