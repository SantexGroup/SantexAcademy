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
  patchAdmins(userId:number){
    const requestBody = { userId }; 
    return this.httpUser.patch(this.apiUrl+"/admins",requestBody)
  }
  deleteAdmins(userId:number){
    return this.httpUser.delete(this.apiUrl+"/admin/" + userId)
  }
  getUsers(){
    return this.httpUser.get(this.apiUrl)
  }
  getUser(id: number){
    return this.httpUser.get(this.apiUrl+"/"+ id)
  }
  postUser(user: User){
    return this.httpUser.post(this.apiUrl, user);
  }
  getUserByEmail(email:string){
    return this.httpUser.get(this.apiUrl+"/email/"+ email)
  }
  removeCourseRegistration(idCourse:number,idUser:number ){
    const idCourseSelect = idCourse;
    const idUserSelect = idUser;
    return this.httpUser.delete(this.apiUrl+"/removeinscription/"+idCourseSelect+"/"+idUserSelect)
  }
  validateCode(email:string, code:string){
    return this.httpUser.get(this.apiUrl+"/verificar-email/"+email+"/"+code)
  }
  createCode(email:string):Observable<any>{
    const requestBody = { email }; 
    return this.httpUser.post(this.apiUrl+ "/createnewcode", requestBody)
  }
  inscription(idCourse:number, idUser:number){  
  const data = { idCourse, idUser };
  return this.httpUser.post(this.apiUrl + "/inscription", data);
  }


}
