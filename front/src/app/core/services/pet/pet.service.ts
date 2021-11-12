import { Injectable } from '@angular/core';
import { ApiService } from '../../http/api.service';

import { CookieService } from 'ngx-cookie-service';

import { User } from '../../interfaces/users/users.interface';
import { Pet } from '../../interfaces/pets/pets.interface';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class PetService {

  constructor(private apiService: ApiService, private cookieService: CookieService) { }

  getAllPets(page: number): Observable<Pet[]> {
    const params = new HttpParams().append('page', page)
    return this.apiService.get<Pet[]>(`pets`, params );
  }
}
