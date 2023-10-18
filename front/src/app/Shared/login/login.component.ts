import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  corLog: string = '';
  pasLog: string = '';
  
  // variables para corroborar logueo
  logeadoComprador: boolean = false;
  logeadoVendedor: boolean = false;
  infoLoc: any[] = [];
  resLogin: any[] = [];
  

  constructor(private service: LoginService, private router: Router) { } 

  ngOnInit(): void {
    this.corroborarLogeo();
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
      if (infoLocal && (this.logeadoComprador || this.logeadoVendedor)) {
        let newObject = JSON.parse(infoLocal);
        if (newObject) {
          if (!newObject[1].users.estadoDeVendedor) {
            const userId = newObject[1].users.id;
            const cambioVendedor = this.service.cambioVendedorServ(userId).subscribe(res => {
            if (cambioVendedor) {
              localStorage.clear();
              localStorage.setItem("resLog", JSON.stringify(res));
              this.logeadoVendedor = true;
              this.logeadoComprador = false;
              this.router.navigateByUrl('/');
            }
          })     
        }
      }
    }
  }
}

}