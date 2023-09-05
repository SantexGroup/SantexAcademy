import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

/*
import { HttpClient } from '@angular/common/http';
import { ModeloUsuario } from './interfaces/modelo-usuario';
*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  corLog: string = '';
  pasLog: string = '';
  resLog:  string[] = [];
  prueba: object = {};
  noLogeado: boolean = false;
  logeadoComprador: boolean = false;
  logeadoVendedor: boolean = false;
  logeado: boolean = true;
  token: any[] = [];


  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  botonLogin() {
    this.service.login(this.corLog, this.pasLog).subscribe(respuesta => {
      console.log(respuesta)
      this.token = respuesta;
      console.log(this.token)
    }) 
      console.log(this.token)  
  }

  // deslogear() {
  //   if (this.logeadoVendedor = true) {
  //     this.logeadoVendedor = false;
  //   }
  // }
  // if (logeadoVendedor = true) {
  //   console.log("cerró sesión")
  // }
}