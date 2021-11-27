import { Injectable } from '@angular/core';
import { ApiService } from '../../http/api.service';

import { CookieService } from 'ngx-cookie-service';

import { User } from '../../interfaces/users/users.interface';
import { Pet } from '../../interfaces/pets/pets.interface';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Breed } from '../../interfaces/breeds/breeds.interface';
//import { stringify } from 'querystring';

@Injectable()
export class PetService {

  constructor(private apiService: ApiService, private cookieService: CookieService) { }

  getAllBreeds(): Observable<Breed[]> {
    return this.apiService.get<Breed[]>('breeds');    
  }
  
  getAllPets(page: number, limit: number, sort: string, order: string): Observable<Pet[]> {
    if(!order) order = 'asc';
    console.log(order);
    const params = new HttpParams().append('page', page).append('sort', sort).append('order', order).append('limit', limit);
    return this.apiService.get<Pet[]>(`pets`, params );
  }

  /**
   * Registro de nuevo Perro
   */
  createPet(newPet: Pet) {
    return this.apiService.post(`pets`, newPet);
  }
}
