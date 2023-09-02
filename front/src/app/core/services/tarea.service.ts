import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private apiService:ApiService) { }

  
}
