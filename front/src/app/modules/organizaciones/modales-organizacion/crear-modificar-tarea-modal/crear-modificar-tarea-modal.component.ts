import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, take } from 'rxjs';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { Organizacion } from 'src/app/core/interfaces/organizacion';
import { Tarea } from 'src/app/core/interfaces/tarea';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { OrganizacionService } from 'src/app/core/services/organizacion.service';
import { TareaService } from 'src/app/core/services/tarea.service';
import * as moment from 'moment';

@Component({
  selector: 'app-crear-tarea-modal',
  templateUrl: './crear-modificar-tarea-modal.component.html',
  styleUrls: ['./crear-modificar-tarea-modal.component.css']
})
export class CrearModificarTareaModalComponent implements OnInit {

  constructor(private categoriaService:CategoriaService, organizacionService:OrganizacionService, fb:FormBuilder, 
              private tareaService:TareaService, private matSnackBar:MatSnackBar,private dialogoActual:MatDialogRef<CrearModificarTareaModalComponent>,
              @Inject(MAT_DIALOG_DATA)private dataTarea:Tarea) { 
    
                this.datosOrganizacion$ = organizacionService.getDatosOrganizacion;
                
    if(dataTarea){
      
      this.titulo ='Modificar Tarea';
      this.modificar = true;

      const fechaMoment = moment(this.dataTarea.date);
      
      this.form = fb.group({
        nombre:[this.dataTarea.name, Validators.required],
        descripcion:[this.dataTarea.description,Validators.required],
        puntos:[this.dataTarea.points,Validators.required],
        fecha:[fechaMoment.toDate(),Validators.required],
        lugar:[this.dataTarea.place,Validators.required],
        idCategoria:[this.dataTarea.id_category,Validators.required],
        cantidadParticipantes:[this.dataTarea.cant_participantes,Validators.required]
  
      });  
    }
    else{
      this.titulo = 'Crear Tarea';
      this.modificar = false;
      this.form = fb.group({
        nombre:['', Validators.required],
        descripcion:['',Validators.required],
        puntos:['',Validators.required],
        fecha:['',Validators.required],
        lugar:['',Validators.required],
        idCategoria:['',Validators.required],
        cantidadParticipantes:['',Validators.required]
  
      });
    }

  }
    

  ngOnInit(): void {
    
    this.cargarCategorias();
  }

  listCategorias:Categoria[] = [];
  datosOrganizacion$:Observable<Organizacion | null>;
  form:FormGroup;
  titulo:string;
  modificar:boolean;


  cargarCategorias():void{
    this.categoriaService.getCategorias().subscribe({
      next:(res)=>{
        
        this.listCategorias = res;
      
      },
      error:(err)=> {
        
        console.log(err)
      
      }
    });
  }

  crearTarea():void{
    let idCoordinador = null;
    this.datosOrganizacion$.pipe(take(1)).subscribe({
      next:(res)=>{
        idCoordinador = res?.id;
      }
    });
    
    if(idCoordinador){

      const formValue = this.form.value;
      
      const nuevaTarea:Tarea = {
        name: formValue.nombre,
        description: formValue.descripcion,
        id_coordinator: idCoordinador!,
        points: formValue.puntos,
        date: formValue.fecha,
        place: formValue.lugar,
        id_category: formValue.idCategoria,
        cant_participantes:formValue.cantidadParticipantes

      } 

      this.tareaService.crearTarea(nuevaTarea).subscribe({
        next:()=>{
          this.matSnackBar.open("Tarea Creada","OK",{horizontalPosition:'center', verticalPosition:'top', duration:3000});
          this.dialogoActual.close(true);
        },
        error:()=>{
          this.matSnackBar.open("No se pudo crear la Tarea","ERROR",{horizontalPosition:'center', verticalPosition:'top', duration:3000});
        }
      });


    }
    else{
      this.matSnackBar.open("No se pudo crear la Tarea","ERROR",{horizontalPosition:'center', verticalPosition:'top', duration:3000});
    }
  }

  modificarTarea():void{
    const formValue = this.form.value;
    const tareaModificada:Tarea = {
      name: formValue.nombre,
      description: formValue.descripcion,
      points: formValue.puntos,
      date: formValue.fecha,
      place: formValue.lugar,
      id_category: formValue.idCategoria,
      cant_participantes: formValue.cantidadParticipantes
    }
    
    this.tareaService.modificarTarea(this.dataTarea.id!, tareaModificada).subscribe({
      next:()=>{
        this.matSnackBar.open("Tarea Modificada","OK",{horizontalPosition:'center', verticalPosition:'top', duration:3000});
          this.dialogoActual.close(true);
      },
      error:(err)=>{
        this.matSnackBar.open("No se pudo modificar la Tarea","ERROR",{horizontalPosition:'center', verticalPosition:'top', duration:3000});
      }
    });
  }




}
