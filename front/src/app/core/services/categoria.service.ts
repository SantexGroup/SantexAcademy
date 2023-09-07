import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private apiService:ApiService) { }


  getCategorias():Observable<Categoria[]>{

    return this.apiService.get('/category/get-all');
  }
}
