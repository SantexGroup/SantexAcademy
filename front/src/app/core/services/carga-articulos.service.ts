import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class CargaArticulosService {

  constructor(private apiService: ApiService) { }

  cargaFiles(formData: any) {
    return this.apiService.post<any>('/upload', formData);
  }
}
