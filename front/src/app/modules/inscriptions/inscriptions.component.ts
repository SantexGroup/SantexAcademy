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
  token2: string="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbmdlbGdhYnJpZWxuaWV2YXNAZ21haWwuY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY5NTg0NDM1OX0.orTpDrocz4pBMNIwbM9TrztNOiix2FWr18OZ9EqKdO4"
constructor(private userService:UserService){
  localStorage.setItem('token', this.token2);
  this.getToken()
}
getToken(){
  if (this.token) {
    try {
      // Decodifica el token JWT
      const tokenPayload = JSON.parse(atob(this.token.split('.')[1]));

      // Los datos del payload estarán disponibles en 'tokenPayload'
      console.log(tokenPayload);

      // Puedes acceder a campos específicos del payload, por ejemplo:
      this.userData.email = tokenPayload.email;
      this.userService.getUserByEmail(this.userData.email).subscribe(
        (data)=>{
          this.userData = data
          this.inscriptions = this.userData.Registereds
          console.log(this.inscriptions)
        },
        (error)=>{
          console.log(error)
        }
      )
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir al decodificar el token
      console.error('Error al decodificar el token:', error);
    }
  }
}
}
