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
  // infoLocal: any[] = [];
  // infoLocal: any;
  // infoLocal: string = '';
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
    this.corroborarLogeo();    
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
        if (!newObject[1].users.estadoDeVendedor) {
          this.logeadoComprador = true;
          this.logeadoVendedor = false;
        }else {
          this.logeadoComprador = false;
          this.logeadoVendedor = false;
        }
      }
    }
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




 // const tokenLocal = localStorage.getItem('token');
    // const venLocal = localStorage.getItem('estadoDeVendedor');
    // // this.infoLocal = localStorage.getItem('resLog');
    // // this.infoLocal = localStorage.getItem(JSON.parse('resLog'));
    // // const venLocal = localStorage.getItem('estadoDeVendedor');
    // console.log(tokenLocal)
    // console.log(venLocal)    
    // // console.log(this.infoLocal[1].users.dni);
    // if (tokenLocal && venLocal == 'false') {
    //   this.logeadoComprador = true;
    //   this.logeadoVendedor = false;
    // }
    // if (tokenLocal && venLocal == 'true') {
    //   this.logeadoVendedor = true;
    //   this.logeadoComprador = false;
    // }


// let newObject = window.localStorage.getItem("resLog");
// console.log(JSON.parse(this.newObject));

// const newObject = localStorage.getItem('token');
// const tokenLoc = localStorage.getItem(JSON.parse('resLog'))
// console.log(tokenLoc)
// console.log('tokenLoc2', JSON.parse(tokenLoc))

/*
if (infoLocal && !infoLocal.users.estadoDeVendedor) {
  this.logeadoComprador = true;
}
if (infoLocal && infoLocal.users.estadoDeVendedor) {
  this.logeadoVendedor = true;
}
*/
  
  botonLogin() {

    this.service.login(this.corLog, this.pasLog).subscribe(res => {
      if (res) {
        localStorage.setItem( "token", JSON.stringify(res));
        const usuarioLog = this.service.usuarioLogeado();
        this.usuarioLogeado = usuarioLog;
        console.log(this.usuarioLogeado);
        
      }
    })


  


        // localStorage.setItem( 'token', JSON.stringify(res[0].token));
        // localStorage.setItem( 'estadoDeVendedor', JSON.stringify(res[1].users.estadoDeVendedor));
        // localStorage.setItem( 'id', JSON.stringify(res[1].users.id));


  


        // localStorage.setItem( 'token', JSON.stringify(res[0].token));
        // localStorage.setItem( 'estadoDeVendedor', JSON.stringify(res[1].users.estadoDeVendedor));
        // localStorage.setItem( 'id', JSON.stringify(res[1].users.id));

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
  
    

  

    // if (this.infoLocal) {
    //   if (this.logeadoVendedor || this.logeadoComprador) {
    //     this.logeadoVendedor = false;
    //     this.logeadoComprador = false;
    //   }
    //   localStorage.clear()
    //   this.router.navigateByUrl('/'); 
    //   this.router.navigate(['/']);
    // }

  

}
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
  

  
  // estadoLogin() {
  //   this.logeadoComprador = true;
  // }
  

  // estadoLogin() {
  //   console.log(this.usuarioLogeado)
  // }

  // if (logeadoVendedor = true) {
  //   console.log("cerró sesión")
  // }
