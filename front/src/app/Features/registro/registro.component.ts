import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/core/services/registro.service';
import { MensajeService } from 'src/app/core/services/mensaje.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

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

  constructor(private service: RegistroService, private mensajeService: MensajeService, private router: Router, private loginservice: LoginService) { }

  ngOnInit(): void {

    this.service.getProvincias().subscribe(provincias => {this.listprovincias = provincias});

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

        this.loginservice.login(this.corReg, this.pasReg).subscribe(res => {
          if (res) {
            localStorage.setItem('resLog', JSON.stringify(res));
          }
          this.router.navigate(['home-page']);
        })
        });
    } else {
      this.mensajeService.mensajeRegistro('Campos incompletos. Por favor, complete todos los campos.');
    }
  }
}