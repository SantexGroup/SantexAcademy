import { Component, OnInit } from '@angular/core';
import { ResumenVoluntario } from 'src/app/core/interfaces/resumenVoluntario';
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
  
  datosVoluntario:ResumenVoluntario | null = null;
  constructor(private voluntarioService:VoluntarioService, private tareaService:TareaService) {
    this.voluntarioService.getDatosVoluntario.subscribe({
      next:(res)=> {this.datosVoluntario = res; console.log("Nuevos datos")}
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
          this.tareaService.inscribirVoluntario(tarea.id!,this.datosVoluntario?.voluntario.id!).subscribe({
            next:(res)=>{
              Swal.fire(
                'Felicitaciones!',
                `Te has inscripto a la tarea: ${tarea.name}`,
                'success'
              );
              const nuevosDatos:ResumenVoluntario = this.datosVoluntario!;

              nuevosDatos.voluntario = res.voluntario;
              nuevosDatos.tareas = res.tareas;

              this.voluntarioService.setDatosVoluntario = nuevosDatos;
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

  desinscribirVoluntario(tarea:Tarea):void{
    
    if(this.datosVoluntario){
 
       Swal.fire({
         title: 'Estas seguro/a?',
         text: "Deseas desinscribirte a la tarea: "+tarea.name+"?",
         icon: 'warning',
         iconColor:'#d33',
         showCancelButton: true,
         confirmButtonColor: '#d33',
         cancelButtonColor: '#3085d6',
         cancelButtonText: 'No, Cancelar',
         confirmButtonText: 'Si'
       }).then((result) => {
         if (result.isConfirmed) {
           this.tareaService.desinscribirVoluntario(tarea.id!,this.datosVoluntario?.voluntario.id!).subscribe({
             next:(res)=>{
               Swal.fire(
                 'Ok!',
                 `Te desinscribiste a la tarea: ${tarea.name}`,
                 'success'
               );

               const nuevosDatos:ResumenVoluntario = this.datosVoluntario!;

               nuevosDatos.voluntario = res.voluntario;
               nuevosDatos.tareas = res.tareas;
 
               this.voluntarioService.setDatosVoluntario = nuevosDatos;
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
