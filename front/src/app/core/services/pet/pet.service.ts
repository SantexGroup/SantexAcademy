import { Injectable } from '@angular/core';
import { ApiService } from '../../http/api.service';

import { CookieService } from 'ngx-cookie-service';

import { User } from '../../interfaces/users/users.interface';
import { Pet } from '../../interfaces/pets/pets.interface';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
//import { stringify } from 'querystring';

@Injectable()
export class PetService {

  constructor(private apiService: ApiService, private cookieService: CookieService) { }

  getAllPets(page: number): Observable<Pet[]> {
    const params = new HttpParams().append('page', page)
    return this.apiService.get<Pet[]>(`pets`, params );
  }

  createPet(name: string, breed: string, gender: string, birth_date: Date){
    //Atento que el back puede pedir el UserId para crear un perro
    //Al parecer lo toma de req.user
    //el unico que no es string es birth_date : Date

    //donde se pondrian las validaciones del back (ejemplo que el usuario no tenga otra mascota con el mismo nombre)??
    //Rta: en el back en services antes de hacer el INSERT se consulta y se devuelve el error... pero como lo capturo desde el front???
    //Puede que el toast del componente resuelva el problema.
    const {id} = JSON.parse(this.cookieService.get('user'));
    // const {id} = JSON.parse(userdata)
    console.log(id);
    const body = {
      name, breed, gender, birth_date, id
    }
    
    return this.apiService.post(`pets`, body);
  }
}
