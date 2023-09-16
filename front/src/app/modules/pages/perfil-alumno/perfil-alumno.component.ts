import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.css'],
})
export class PerfilAlumnoComponent {
  perfilDelAlumno = {
    nombre: 'Nombre del Alumno',
    edad: 20,
    // Otros datos del perfil
  };
}

