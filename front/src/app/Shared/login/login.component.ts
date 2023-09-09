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
  //usuarioLogeado: boolean = false;
  infoLoc: any[] = [];
  // infoLocal: any[] = [];
  // infoLocal: any;
  // infoLocal: string = '';
  resLogin: any[] = [];
  

  constructor(private service: LoginService, private router: Router) { } 

  ngOnInit(): void {

    this.corroborarLogeo();

    console.log('vendedor: ' + this.logeadoVendedor);
    console.log('comprador: ' + this.logeadoComprador);

  }

  botonLogin() {
    let infoLocal = localStorage.getItem('resLog')
    if (infoLocal) {
      localStorage.clear();
    }

    this.service.login(this.corLog, this.pasLog).subscribe(res => {
      if (res) {
        localStorage.setItem( 'resLog', JSON.stringify(res));
        if (!res[1].users.estadoDeVendedor) {
          this.logeadoComprador = true;
          this.logeadoVendedor = false;
        }
        if (res[1].users.estadoDeVendedor) {
          this.logeadoVendedor = true;
          this.logeadoComprador = false;
        }
        this.router.navigateByUrl('/'); 
      }
    })
  }

  corroborarLogeo() {    
    let infoLocal = localStorage.getItem('resLog')
    if (infoLocal) {
      let newObject = JSON.parse(infoLocal);
      if (newObject) {
        if (newObject[1].users.estadoDeVendedor) {
          this.logeadoVendedor = true;
          this.logeadoComprador = false;
        }
        else if (!newObject[1].users.estadoDeVendedor) {
          this.logeadoComprador = true;
          this.logeadoVendedor = false;
        } else {
          this.logeadoComprador = false;
          this.logeadoVendedor = false;
        }
      }
    }
  }

  deslogear() {
    let infoLocal = localStorage.getItem('resLog')
    if (infoLocal) {
      if (this.logeadoComprador || this.logeadoVendedor) {
        this.logeadoVendedor = false;
        this.logeadoComprador = false;
        localStorage.clear()
        this.router.navigateByUrl('/'); 
      }      
    }
  }
  
  botonVendedor() {
    if(confirm("¿Seguro que quiere activar su perfil de vendedor?")) {
      let infoLocal = localStorage.getItem('resLog')
      if (infoLocal && (this.logeadoComprador == true || this.logeadoVendedor == true)) {
        let newObject = JSON.parse(infoLocal);
        if (newObject) {
          if (!newObject[1].users.estadoDeVendedor) {
            const id = newObject[1].users.id;
            const estadoVen = newObject[1].users.estadoDeVendedor;
            let user =[id, estadoVen];
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
    }
  }
}


  }

  // botonVendedor() {
  //   const tokenLocal = localStorage.getItem('token');
  //   const venLocal = localStorage.getItem('estadoDeVendedor');
  //   const id = localStorage.getItem('id')
  //   let estadoVen = false
  //   if (tokenLocal && venLocal == 'false') {
  //     estadoVen = true
  //   }
  //   const user = {id, estadoVen}
  //   console.log(user)
  //   const cambioVendedor = this.service.cambioVendedorServ(user).subscribe(res => {
  //     if (cambioVendedor) {
  //       localStorage.clear();
  //       localStorage.setItem( "token", JSON.stringify(res));
  //       this.logeadoVendedor = true;
  //       this.router.navigateByUrl('/');
  //     }
  //   })
  // }  