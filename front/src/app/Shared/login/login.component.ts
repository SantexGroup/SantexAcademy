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
  infoLocal: any[] = [];
  

  constructor(private service: LoginService, router: Router) { } 

  ngOnInit(): void {
    let infoLocal = localStorage.getItem('token')
    console.log('token') //no se está encontrando lo guardado en local con nombre token
    if (infoLocal && !infoLocal.users.estadoDeVendedor) {
      this.logeadoComprador = true;
    }
    if (infoLocal && infoLocal.users.estadoDeVendedor) {
      this.logeadoVendedor = true;
    }
    console.log('hola') //no se está ejecutando ¿Es por los errores generales?
  }
  
  botonLogin() {
    if (this.infoLocal) { //borrar localStorage por las dudas
      localStorage.clear()
    }
    this.service.login(this.corLog, this.pasLog).subscribe(res => {
      console.log(res[0])
      console.log(res)
      
      if (res) {
        localStorage.setItem('token', JSON.stringify(res.token));
        // localStorage.setItem('token', JSON.stringify(res.users.estadoDeVendedor));
          if (!res.users.estadoDeVendedor) {
            this.logeadoComprador = true;
          }
          if (res.users.estadoDeVendedor) {
            this.logeadoVendedor = true;
          }
          this.router.navigateByUrl('/'); //no sé porque no lee el router 
          // this.estadoLogin();                              
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
      this.router.navigateByUrl('/'); 
      this.router.navigate(['/']);
    }
  }

  botonVendedor() {
    if (this.infoLocal && !this.infoLocal.users.estadoDeVendedor) { //esto es un error ya que users no está declarado, es un resultado deuna petición 
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