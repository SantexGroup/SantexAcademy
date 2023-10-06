import { Component, OnInit } from '@angular/core';
import { DatosUsuarioService } from 'src/app/core/services/datos-usuario.service';
import { MensajeService } from 'src/app/core/services/mensaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent implements OnInit {

  corDat: string = '';
  pasDat: string = '';
  aliDat: string = '';
  nomDat: string = '';
  apeDat: string = '';
  dniDat: string = '';
  proDat: string = '0';
  locDat: string = '0';
  dirDat: string = '';

  listprovincias: any[] = [];
  listlocalidades: any[] = [];

  mensajeDatosUsuario: string = '';

  constructor(private service: DatosUsuarioService, private mensajeService: MensajeService, private router: Router) { }

  ngOnInit(): void {
    this.service.getProvincias().subscribe(provincias => { this.listprovincias = provincias });
  }

/*   actualizarLocalidades() {
    this.service.getLocalidades(this.proDat).subscribe(localidades => { this.listlocalidades = localidades });
  }

  botDat() {
    // Reemplaza el código del formulario con la lógica de mostrar los datos
    if (this.corDat && this.pasDat && this.aliDat && this.nomDat && this.apeDat && this.dniDat && this.proDat && this.locDat && this.dirDat) {
      this.mensajeDatosUsuario = `
        Email: ${this.corDat}
        Contraseña: ${this.pasDat}
        Alias: ${this.aliDat}
        Nombres: ${this.nomDat}
        Apellidos: ${this.apeDat}
        DNI: ${this.dniDat}
        Provincia: ${this.proDat}
        Localidad: ${this.locDat}
        Dirección: ${this.dirDat}
      `;
    } else {
      this.mensajeDatosUsuario = 'Campos incompletos. Por favor, complete todos los campos.';
    }
  } */
} 
