import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class VerArtGenService {

  constructor(private apiService: ApiService) { }

  getProduct() {
    return this.apiService.get<any>('/productos/products');
  }

}
