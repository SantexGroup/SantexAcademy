import { Component, OnInit } from '@angular/core';
import { EditarUsuarioService } from 'src/app/core/services/editar-usuario.service';
import { MensajeService } from 'src/app/core/services/mensaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

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

  constructor(private service: EditarUsuarioService, private mensajeService: MensajeService, private router: Router) { }

  ngOnInit(): void {
    this.corroborarLogueo();
    this.service.getProvincias().subscribe(provincias => {this.listprovincias = provincias});
  }

  corroborarLogueo() {    
    let infoLocal = localStorage.getItem('resLog')
    if (infoLocal) {
      alert("Ya está logueado");
      this.router.navigate(['home-page']);
    }
  }
  actualizarLocalidades() {
    this.service.getLocalidades(this.proReg).subscribe(localidades => {this.listlocalidades = localidades});
  }
  botReg() {
    if (this.corReg && this.pasReg && this.aliReg && this.nomReg && this.apeReg && this.dniReg && this.proReg && this.locReg && this.dirReg) {
      console.log(this.corReg + this.pasReg);
      this.service.registro(
        this.corReg,
        this.pasReg,
        this.aliReg,
        this.nomReg,
        this.apeReg,
        this.dniReg,
        this.locReg,
        this.dirReg
      ).subscribe(respuesta => {
        console.log(respuesta);
        this.mensajeService.mensajeRegistro('Registro completado con éxito.');
        this.router.navigate(['home-page']);
      });
    } else {
      this.mensajeService.mensajeRegistro('Campos incompletos. Por favor, complete todos los campos.');
    }
  }
}
