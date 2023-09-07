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
  logeadoComprador: boolean = false;
  logeadoVendedor: boolean = false;
  infoLocal: string = '';
  usuarioLogeado: boolean = false;

  constructor(private service: LoginService) { }  

  ngOnInit(): void {
    let infoLocal = localStorage.getItem('token')
    console.log('token')
    if (infoLocal && !users.estadoVendedor) {
      this.logeadoComprador = true;
    }
    if (infoLocal && users.estadoVendedor) {
      this.logeadoVendedor = true;
    }
  }
  
  botonLogin() {
    if (this.infoLocal) {
      
    }
    this.service.login(this.corLog, this.pasLog).subscribe(res => {
      if (res) {
        localStorage.setItem( "token", JSON.stringify(res));
        const usuario = this.service.usuarioLogeado(this.usuarioLogeado);
        if (usuario) {
          if (!users.estadoVendedor) {
            this.logeadoComprador = true;
          }
          if (users.estadoVendedor) {
            this.logeadoVendedor = true;
          }
          // this.estadoLogin();                              
        }
      }
    })     
  }

  // estadoLogin() {
  //   this.logeadoComprador = true;
  // }
  

  // estadoLogin() {
  //   console.log(this.usuarioLogeado)
  // }
  deslogear() {
    if (this.infoLocal) {
      if (this.logeadoVendedor || this.logeadoComprador) {
        this.logeadoVendedor = false;
        this.logeadoComprador = false;
      }
      localStorage.clear()
    }
  }
  // if (logeadoVendedor = true) {
  //   console.log("cerró sesión")
  // }
}