import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../http/api.service';
import { Dog } from '../../interfaces/dog/dog.interface';


@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private apiService: ApiService, private http : ApiService) {}

  public registerDog(nombreDog: string, raza: string, sexo: boolean, fechaNacimiento: Date) {
    const body = {
      nombreDog,
      raza,
      sexo,
      fechaNacimiento, 
    };

    return this.http.post('dogs/altaDog', body);
  }

}



