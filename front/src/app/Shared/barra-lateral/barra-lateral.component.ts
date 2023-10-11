import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.scss']
})
export class BarraLateralComponent implements OnInit {

  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  corLog: string = '';
  pasLog: string = '';

  userFirstName: string = '';
  userLastName: string = '';
  
  // variables para corroborar logueo
  logeadoComprador: boolean = false;
  logeadoVendedor: boolean = false;
  infoLoc: any[] = [];
  resLogin: any[] = [];
  

  constructor(private service: LoginService, private router: Router) { } 

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

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
        this.userFirstName = res[1].users.firstName;
        this.userLastName = res[1].users.lastName;
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

    this.isExpanded = false
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
        this.userFirstName = newObject[1].users.firstName;
        this.userLastName = newObject[1].users.lastName;
      }
    }
    this.isExpanded = false;
  }

  deslogear() {
    let infoLocal = localStorage.getItem('resLog')
    if (infoLocal) {
      if (this.logeadoComprador || this.logeadoVendedor) {
        this.logeadoVendedor = false;
        this.logeadoComprador = false;
        localStorage.clear()
        this.router.navigateByUrl('/'); 
        this.isExpanded = false;
        this.corLog = '';
        this.pasLog = '';
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
              console.log(res);
              localStorage.clear();
              localStorage.setItem("resLog", JSON.stringify(res));
              this.logeadoVendedor = true;
              this.logeadoComprador = false;
              this.router.navigateByUrl('/');
              this.isExpanded = false;
            }
          })     
        }
      }
    }
  }
}
  redirigirCompras() {
    this.router.navigateByUrl('/historial-compras');
  }
  redirigirVentas() {
    this.router.navigateByUrl('/historial-ventas');
  }
  redirigirCargarProducto(){
    this.router.navigateByUrl('/carga-articulos');
  }
  redirigirProductosCargados(){
    this.router.navigateByUrl('/historial-ventas');
  }
  redirigirDatosUsuario() {
    this.router.navigateByUrl ('/datos-usuario');
  }
}
