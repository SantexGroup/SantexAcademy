import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-docente',
  templateUrl: './perfil-docente.component.html',
  styleUrls: ['./perfil-docente.component.css']
})
export class PerfilDocenteComponent implements OnInit {
  perfilDelDocente = {
    nombre: 'Nombre del Docente',
    edad: 20,
    // Otros datos del perfil


    }
  constructor() { }

  ngOnInit(): void {
  }

}
