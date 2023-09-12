import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/core/interfaces/tarea';
import { Voluntario } from 'src/app/core/interfaces/voluntario';
import { TareaService } from 'src/app/core/services/tarea.service';
import { VoluntarioService } from 'src/app/core/services/voluntario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tareas-voluntario',
  templateUrl: './tareas-voluntario.component.html',
  styleUrls: ['./tareas-voluntario.component.css']
})
export class TareasVoluntarioComponent implements OnInit {
  
  datosVoluntario:Voluntario | null = null;
  constructor(private voluntarioService:VoluntarioService, private tareaService:TareaService) {
    this.voluntarioService.getDatosVoluntario.subscribe({
      next:(res)=> this.datosVoluntario = res
    });
   }

  ngOnInit(): void {
  }

  inscribirVoluntario(tarea:Tarea):void{
    
   if(this.datosVoluntario){

      Swal.fire({
        title: 'Estas seguro/a?',
        text: "Deseas inscribirte en la tarea: "+tarea.name+"?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.isConfirmed) {
          this.tareaService.inscribirVoluntario(tarea.id!,this.datosVoluntario?.id!).subscribe({
            next:(res)=>{
              Swal.fire(
                'Felicitaciones!',
                `Te has inscripto a la tarea: ${tarea.name}`,
                'success'
              );
              this.voluntarioService.setDatosVoluntario = res;
            },
            error:()=>{
              Swal.fire(
                'Error',
                'No se pudo realizar la inscripción.',
                'error'
              );
            }
            });
          };
          
        })
    };
  }    

}
