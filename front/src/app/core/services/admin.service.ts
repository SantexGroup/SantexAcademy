import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private apiService:ApiService) { 

  }
}
