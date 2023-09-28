import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl= 'http://localhost:4001/api/users'

  constructor(private httpUser: HttpClient) { }

  postUser(user: User){
    return this.httpUser.post(this.apiUrl, user)
  }
  getUserByEmail(email:string){
    return this.httpUser.get(this.apiUrl+"/"+ email)
  }

}
