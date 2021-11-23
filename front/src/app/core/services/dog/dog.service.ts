import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../http/api.service';
import { Dog } from '../../interfaces/dog/dog.interface';


@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http : ApiService) {}

  public registerDog(nombreDog: string, raza: string, sexo: number, fechaNacimiento: Date, id_User: number) {
    const body = {
      nombreDog,
      raza,
      sexo,
      fechaNacimiento, 
      id_User
    };

    return this.http.post('dogs/altaDog', body);
  }
  //public listDog(page:number) {
    //return this.http.get('/list/'+page);
    //};

//este funciona bien con datos
  public listAllDogs(page:number){
    //return this.http.get('dogs/listDogs');
    return this.http.get('dogs/list/'+page);
  }

}



