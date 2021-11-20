import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../http/api.service';
import { listDog } from '../../interfaces/dog/listDog.interface';


@Injectable({
  providedIn: 'root'
})
export class listDogService {

  constructor(private apiService: ApiService, private http : ApiService) {}

  public listDog(page:number) {
    return this.http.get('/list/:page');
    };

    
  }



