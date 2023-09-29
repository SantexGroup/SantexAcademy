import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aula-virtual',
  templateUrl: './aula-virtual.component.html',
  styleUrls: ['./aula-virtual.component.css']
})
export class AulaVirtualComponent implements OnInit {
  nombreCurso: string | undefined;
  imagenCurso: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('ngOnInit de AulaVirtualComponent ejecutado');
    // Obtener los datos del curso pasados desde MisCursosComponent
    const state = history.state;
    this.nombreCurso = localStorage.getItem('nombreCurso') ?? undefined;
    this.imagenCurso = localStorage.getItem('imagenCurso') ?? undefined;
    console.log('Nombre del curso obtenido desde localStorage:', this.nombreCurso);
    console.log('Imagen del curso obtenida desde localStorage:', this.imagenCurso);
  }

}
