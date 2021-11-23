import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../http/api.service';
import { Dog } from '../../interfaces/dog/dog.interface';


@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http : ApiService) {}

  public registerDog(nombreDog: string, idRaza: number, sexo: number, fechaNacimiento: Date, id_User: number) {
    const body = {
      nombreDog,
      idRaza, 
      sexo,
      fechaNacimiento, 
      id_User
    };

    return this.http.post('dogs/altaDog', body);
  }

}



