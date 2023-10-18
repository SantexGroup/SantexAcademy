import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/core/services/registro.service';
import { MensajeService } from 'src/app/core/services/mensaje.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  constructor(private service: RegistroService, private mensajeService: MensajeService, private router: Router) { }

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
        Swal.fire({
          icon: 'success',
          text: 'Registro completado con éxito.',
          confirmButtonText: "Ok"
        })
        this.router.navigate(['home-page']);
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor, complete todos los campos.',
        confirmButtonText: "Ok"
      })
    }
  }
}