import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

type Usuarios = {
  usuario: string;
  contraseña: string;
}

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {


  constructor(private router: Router, private route:ActivatedRoute, private dialog: MatDialog, private http: HttpClient) { }

  Usuarios :Usuarios []= [];




  redirectToRegister() {
    this.router.navigate(['/registro'])
    this.dialog.closeAll();
  }



  ngOnInit(): void {
    this.http.get<Usuarios[]>('http://localhost:3000/login',  {headers:{Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5NzA3NTgyOSwiZXhwIjoxNjk5NjY3ODI5fQ.krrlOFO2FeOCPisBkcgYpRHOlbnUENDX17_lxp4vx64"
  }}).subscribe((listaUsuarios : Usuarios[]) => {
      this.Usuarios = listaUsuarios;
      console.log(this.Usuarios);
      return;
    });
  }

}
