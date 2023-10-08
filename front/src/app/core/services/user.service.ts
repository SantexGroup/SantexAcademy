import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: ApiService) { }
  login(data: any){
    return this._http.post('http://localhost:4001/user/login',data);
  }
}
