import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/core/services/registro.service';
import { MensajeService } from 'src/app/core/services/mensaje.service';

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

  constructor(private service: RegistroService, private mensajeService: MensajeService) { }

  ngOnInit(): void {
  }

  mensajeRegistro: string = '';

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
        this.proReg,
        this.locReg,
        this.dirReg
      ).subscribe(respuesta => {
        console.log(respuesta);
        this.mensajeService.mensajeRegistro('Registro completado con éxito.');
      });
    } else {
      this.mensajeService.mensajeRegistro('Campos incompletos. Por favor, complete todos los campos.');
    }
  }

  provincias: string[] = ['Córdoba', 'Buenos Aires', 'Formosa'];

  localidades: { [key: string]: string[] } = {
    'Córdoba': ['Córdoba Capital', 'Villa Carlos Paz', 'Río Cuarto'],
    'Buenos Aires': ['La Plata', 'Mar del Plata', 'Quilmes'],
    'Formosa': ['Formosa', 'Clorinda', 'Pirané']
  };

  actualizarLocalidades() {
    if (this.proReg in this.localidades) {
      this.locReg = '0';
    } else {
      this.locReg = '';
    }
  }
}


