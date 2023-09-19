import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Tarea } from 'src/app/core/interfaces/tarea';
import { Voluntario } from 'src/app/core/interfaces/voluntario';
import { TareaService } from 'src/app/core/services/tarea.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-voluntarios-inscriptos',
  templateUrl: './voluntarios-inscriptos.component.html',
  styleUrls: ['./voluntarios-inscriptos.component.css']
})
export class VoluntariosInscriptosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public tarea:Tarea, private tareaService:TareaService, private modalActual:MatDialogRef<VoluntariosInscriptosComponent>) {



  
  }

  listVoluntarios:Voluntario[] = [];
  listVoluntariosModificados:Voluntario[]= [];
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

  modificarAsistencia(voluntario:Voluntario):void{

     
    
    if(voluntario.tareasVoluntario){
      voluntario.tareasVoluntario.asistio = !(voluntario.tareasVoluntario?.asistio);
    }
    
    const indice = this.listVoluntariosModificados.findIndex(v => v.tareasVoluntario?.volunteerId === voluntario.tareasVoluntario?.volunteerId);
    
    if(indice !== -1){

        this.listVoluntariosModificados.splice(indice, 1);
        return;
    }
    

    this.listVoluntariosModificados.push(voluntario);

  }

  modificarAsistencias():void{
    
    this.tareaService.modificarAsistencias(this.tarea.id!, this.listVoluntariosModificados).subscribe({
      next:()=>{
        Swal.fire(
          'Éxito!',
          'Se cargaron las asistencias correctamente',
          'success'
        );
        this.modalActual.close();
      },
      error:()=>{
        Swal.fire(
          'Error',
          'Error cargar las asistencias',
          'error'
        );
        this.modalActual.close();
      }
    });

  }



}
