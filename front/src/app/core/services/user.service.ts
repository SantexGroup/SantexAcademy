import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl= 'http://localhost:4001/api/users'

  constructor(private httpUser: HttpClient) { }

  getUsers() {
    return this.httpUser.get<User>(this.apiUrl)
  };

  getUserById(id:number){
    return this.httpUser.get<User>(this.apiUrl+'/'+id)
  }

  postUser(user: User){
    return this.httpUser.post(this.apiUrl, user)
  }

  putUser(user: User, id:number){
    return this.httpUser.put(this.apiUrl+'/'+id, user)
  }

  deleteUser(id:number){
    return this.httpUser.delete(this.apiUrl+'/'+id)
  }

}
