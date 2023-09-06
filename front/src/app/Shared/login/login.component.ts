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
  usuarioLogeado: boolean = false;


  constructor(private service: LoginService) { }
  

  ngOnInit(): void {
  }

  botonLogin() {
    this.service.login(this.corLog, this.pasLog).subscribe(respuesta => {
      console.log(respuesta)
      if (respuesta) {
        localStorage.setItem( "token", respuesta);
        const usuario = this.service.usuarioLogeado(this.usuarioLogeado);
        if (usuario) {
          this.usuarioLogeado = true;
          this.estadoLogin();
        }
      }
    })     
  }
  estadoLogin() {
    console.log(this.usuarioLogeado);
    this.logeadoVendedor = true;
  }
  

  // estadoLogin() {
  //   console.log(this.usuarioLogeado)
  // }
  // deslogear() {
  //   if (this.logeadoVendedor = true) {
  //     this.logeadoVendedor = false;
  //   }
  // }
  // if (logeadoVendedor = true) {
  //   console.log("cerró sesión")
  // }
}