import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearTareaModalComponent } from '../modales-organizacion/crear-tarea-modal/crear-tarea-modal.component';

@Component({
  selector: 'app-tareas-organizacion',
  templateUrl: './tareas-organizacion.component.html',
  styleUrls: ['./tareas-organizacion.component.css']
})
export class TareasOrganizacionComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  crearTarea():void{
    this.dialog.open(CrearTareaModalComponent);
  }
}
