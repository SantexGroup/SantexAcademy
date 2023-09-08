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
  infoLoc: any[] = [];
  resLogin: any[] = [];
  

  constructor(private service: LoginService, private router: Router) { } 

  ngOnInit(): void {
    let infoLocal = localStorage.getItem('token')
    
    if (infoLocal) {
    let newObject = JSON.parse(infoLocal);
    console.log(newObject);
    }
    /*
    if (infoLocal && !infoLocal.users.estadoDeVendedor) {
      this.logeadoComprador = true;
    }
    if (infoLocal && infoLocal.users.estadoDeVendedor) {
      this.logeadoVendedor = true;
    }
    */
  }
  
  botonLogin() {

    this.service.login(this.corLog, this.pasLog).subscribe(res => {
      if (res) {
        localStorage.setItem( "token", JSON.stringify(res));
        const usuarioLog = this.service.usuarioLogeado();
        this.usuarioLogeado = usuarioLog;
        console.log(this.usuarioLogeado);
        
      }
    })

    /*
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
          if (res.users.estadoDeVendedor) {
            this.logeadoVendedor = true;
          }
          this.router.navigateByUrl('/'); //no sé porque no lee el router 
          // this.estadoLogin();                              
      }
    })
    */  
  }

  deslogear() {
    if (this.infoLoc) {
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
    /*
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
    */
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