import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from 'src/app/core/interfaces/tarea';

@Component({
  selector: 'app-detalle-tarea',
  templateUrl: './detalle-tarea.component.html',
  styleUrls: ['./detalle-tarea.component.css']
})
export class DetalleTareaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public dataTarea:Tarea) { }

  ngOnInit(): void {
  }

}
