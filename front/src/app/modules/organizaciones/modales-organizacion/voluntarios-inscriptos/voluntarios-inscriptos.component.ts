import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from 'src/app/core/interfaces/tarea';
import { Voluntario } from 'src/app/core/interfaces/voluntario';
import { TareaService } from 'src/app/core/services/tarea.service';

@Component({
  selector: 'app-voluntarios-inscriptos',
  templateUrl: './voluntarios-inscriptos.component.html',
  styleUrls: ['./voluntarios-inscriptos.component.css']
})
export class VoluntariosInscriptosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public tarea:Tarea, private tareaService:TareaService) {



  
  }

  listVoluntarios:Voluntario[] = [];
  ngOnInit(): void {

    this.getVoluntariosInscriptos();

  }


  getVoluntariosInscriptos(){
    this.tareaService.getInscriptos(this.tarea.id!).subscribe({
      next:(res)=>{
        this.listVoluntarios = res;
      }
    });
  }



}
