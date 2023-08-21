import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl= 'http://localhost:4001/api/users'

  constructor(private httpUsers: HttpClient) { }

  postCourses(user: User){
    return this.httpUsers.post(this.apiUrl, user)
  }

}
