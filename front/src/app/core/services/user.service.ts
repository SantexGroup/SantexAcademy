import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl= 'http://localhost:4001/api/users'

  constructor(private httpUser: HttpClient) { }

  postUser(user: User){
    return this.httpUser.post(this.apiUrl, user)
  }
  validateCode(email:string, code:string){
    return this.httpUser.get(this.apiUrl+"/verificar-email/"+email+"/"+code)
  }
  createCode(email:string):Observable<any>{
    const requestBody = { email }; 
    return this.httpUser.post(this.apiUrl+ "/createnewcode", requestBody)
  }
  getUserByEmail(email:string){
    return this.httpUser.get(this.apiUrl+"/"+ email)
  }

}
