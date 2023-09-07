import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { Router } from '@angular/router';

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
  usuarioLogeado: boolean = false;
  infoLocal: string = '';
  

  constructor(private service: LoginService, router: Router) { }  //se llama a router para redirigir (no sé si está bien)

  ngOnInit(): void {
    let infoLocal = localStorage.getItem('token')
    console.log('token') //no se está encontrando el token 
    if (infoLocal && !infoLocal.users.estadoDeVendedor) {
      this.logeadoComprador = true;
    }
    if (infoLocal && infoLocal.users.estadoDeVendedor) {
      this.logeadoVendedor = true;
    }
  }
  
  botonLogin() {
    if (this.infoLocal) { //borrar localStorage por las dudas
      localStorage.clear()
    }
    this.service.login(this.corLog, this.pasLog).subscribe(res => {
      if (res) {
        localStorage.setItem("token", JSON.stringify(res));
        const usuario = this.service.usuarioLogeado(this.usuarioLogeado); //no se si hace falta usar la variable usuarioLogeado
        if (usuario) {
          if (!users.estadoDeVendedor) {
            this.logeadoComprador = true;
          }
          if (users.estadoDeVendedor) {
            this.logeadoVendedor = true;
          }
          // this.estadoLogin();                              
        }
      }
    })     
  }

  deslogear() {
    if (this.infoLocal) {
      if (this.logeadoVendedor || this.logeadoComprador) {
        this.logeadoVendedor = false;
        this.logeadoComprador = false;
      }
      localStorage.clear()
      this.router.navigateByUrl('/'); //no sé porque no lee el router 
      this.router.navigate(['/']);
    }
  }

  botonVendedor() {
    if (this.infoLocal && users.estadoDeVendedor = 0) {
      const cambioVendedor = this.service.cambioVendedorServ(user).subscribe(res => {
        if (cambioVendedor) {
          localStorage.clear();
          localStorage.setItem( "token", JSON.stringify(res));
          this.logeadoVendedor = true;
          this.router.navigateByUrl('/');
        }
      }) 
    }
  }

  
  // estadoLogin() {
  //   this.logeadoComprador = true;
  // }
  

  // estadoLogin() {
  //   console.log(this.usuarioLogeado)
  // }

  // if (logeadoVendedor = true) {
  //   console.log("cerró sesión")
  // }
}