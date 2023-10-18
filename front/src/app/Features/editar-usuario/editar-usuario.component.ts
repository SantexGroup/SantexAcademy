import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EditarUsuarioService } from 'src/app/core/services/editar-usuario.service';
import { MensajeService } from 'src/app/core/services/mensaje.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  idUser: string = '';

  corReg: string = '';
  pasReg: string = '';
  aliReg: string = '';
  nomReg: string = '';
  apeReg: string = '';
  dniReg: string = '';
  proReg: string = '0';
  locReg: string = '0';
  dirReg: string = '';

  listprovincias: any[] = [];
  listlocalidades: any[] = [];
  mensajeRegistro: string = '';

  corLog: string = '';
  pasLog: string = '';


  logeadoComprador: boolean = false;
  logeadoVendedor: boolean = false;
  confUsuario: boolean = false;
  infoLoc: any[] = [];
  resLogin: any[] = [];

  constructor(private service: EditarUsuarioService, private mensajeService: MensajeService, private router: Router) { }

  ngOnInit(): void {
    this.getIdUser()
    this.corroborarLogeo()
    
    this.service.getProvincias().subscribe(provincias => {this.listprovincias = provincias});
  }

  
  actualizarLocalidades() {
    this.service.getLocalidades(this.proReg).subscribe(localidades => {this.listlocalidades = localidades});
  }
  
  botReg() {
    if (this.corReg && this.pasReg && this.aliReg && this.nomReg && this.apeReg && this.dniReg && this.proReg && this.locReg && this.dirReg) {
      console.log(this.corReg + this.pasReg);
      this.service.modificarUsuario(
        this.corReg,
        this.pasReg,
        this.aliReg,
        this.nomReg,
        this.apeReg,
        this.dniReg,
        this.locReg,
        this.dirReg,
        this.idUser
      ).subscribe(respuesta => {
        console.log(respuesta);
        Swal.fire({
          icon: 'success',
          text: 'Se han guardado sus cambios.',
          confirmButtonText: "Ok"
        })
        this.router.navigate(['home-page']);
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos.',
        text: 'Por favor, complete todos los campos.',
        confirmButtonText: "Ok"
      })
    }
  }

  getIdUser() {    
    let infoLocal = localStorage.getItem('resLog');
    if (infoLocal) {
      let newObject = JSON.parse(infoLocal);
      const idUser = newObject[1].users.id;
      this.idUser = idUser;
      if (idUser) {
        this.confUsuario = true; // El usuario está logueado
      } else {
        this.confUsuario = false; // El usuario no está logueado
      }
      
    }
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

  eliminarCuenta() {
    Swal.fire({
      title: '¿Desea eliminar su cuenta? ',
      text: "Al confirmar no podrá recuperar sus datos. Esta acción no se puede deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6', 
      confirmButtonText: 'Sí, deseo eliminarla',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        
        const idNumber: number = +this.idUser;
  
      this.service.eliminarUsuario(idNumber).subscribe((resEli: any) => {
        console.log("Res eli: " + resEli);
        if (resEli) {
          console.log("Res eli: " + resEli);
          this.desloguear();
          console.log('deslogueo con exito');
          
          Swal.fire({
            icon: 'success',
            title: 'Su cuenta ha sido eliminada',
            confirmButtonText: "Ok"
          })
          this.router.navigate(['/']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'No se ha podido eliminar su cuenta',
            confirmButtonText: "Ok"
          })
          this.router.navigate(['/']);
        }
      });


      }
    })

 
  }
  
  desloguear() {
    console.log('Entrando en la función desloguear');
  
    let infoLocal = localStorage.getItem('resLog');
    console.log('Info local:', infoLocal);
  
    if (infoLocal) {
      console.log('Info local existe');
      if (this.logeadoComprador || this.logeadoVendedor) {
        console.log('Usuario está logeado como comprador o vendedor');
        this.logeadoVendedor = false;
        this.logeadoComprador = false;
        localStorage.clear();
        console.log('LocalStorage limpio');
        this.isExpanded = false;
        this.corLog = '';
        this.pasLog = '';
        console.log('Redirigido a / y variables restablecidas');
      }
    }
  }
  
}

