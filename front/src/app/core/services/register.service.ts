import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Registered } from '../interfaces/registered';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl= 'http://localhost:4001/api/registers';  
  
  constructor(private httpRegister: HttpClient) { }

  getRegisterById(id:number){
    return this.httpRegister.get<Registered>(this.apiUrl+'/'+id)
  }

}

