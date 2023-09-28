import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent {
  id : number =0;
  token: string | null = localStorage.getItem('token');
  userData: any = {};
  inscriptions: [] =[];
  token2: string="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbmdlbGdhYnJpZWxuaWV2YXNAZ21haWwuY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY5NTkxNjc5M30.I0iglYqkjQ7fGgVLrahaDqo3CQI7DyQlESgqDwpeYTM"
constructor(private userService:UserService){
  localStorage.setItem('token', this.token2);
  this.getToken()
}
getToken(){
  if (this.token) {
    try {
      const tokenPayload = JSON.parse(atob(this.token.split('.')[1]));

      this.userData.email = tokenPayload.email;
      this.userService.getUserByEmail(this.userData.email).subscribe(
        (data)=>{
          this.userData = data;
          this.inscriptions = this.userData.Registereds;
        },
        (error)=>{
          console.log(error);
        }
      )
    } catch (error) {
      console.error('Error al decodificar el token:', error);
    }
  }
}
deleteInscription(idCourse:number) {
  this.userService.removeCourseRegistration(idCourse, this.id).subscribe(
    (res) => {
      window.location.reload();
    },
    (err) => console.log(err)
  );
}
selectId(id: number){
  this.id = id;
}
}
