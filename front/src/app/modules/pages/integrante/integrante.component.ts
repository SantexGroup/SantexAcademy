import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-integrante',
  templateUrl: './integrante.component.html',
  styleUrls: ['./integrante.component.css']
})
export class IntegranteComponent implements OnInit {
  integrante: any;
  id: any;

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Hola");
    this.rutaActiva.params.subscribe((params: Params) => {
      this.id = params['id'];
      // Aquí puedes cargar los datos del miembro del equipo según el ID, por ejemplo.
    });
  }
}
