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
              private tareaService:TareaService, private matSnackBar:MatSnackBar,
              private dialogoActual:MatDialogRef<CrearModificarTareaModalComponent>,
              @Inject(MAT_DIALOG_DATA)private dataTarea:Tarea) { 
    
    this.datosOrganizacion$ = organizacionService.getDatosOrganizacion;
                
    if(dataTarea){
      
      this.titulo ='Modificar Tarea';
      this.modificar = true;
      this.duracion = this.dataTarea.duracion;
      this.puntos = this.dataTarea.category?.puntosPorHora!;

      const fechaMoment = moment(this.dataTarea.date);
      
      this.form = fb.group({
        nombre:[this.dataTarea.name, Validators.required],
        descripcion:[this.dataTarea.description,Validators.required],
        puntos:[this.dataTarea.points,Validators.required],
        fecha:[fechaMoment.toDate(),Validators.required],
        lugar:[this.dataTarea.place,Validators.required],
        categoriaId:['',Validators.required],
        cantidadParticipantes:[this.dataTarea.cantParticipantes,Validators.required],
        duracion:[this.dataTarea.duracion, Validators.required]
  
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
        categoriaId:['',Validators.required],
        cantidadParticipantes:['',Validators.required],
        duracion:['',Validators.required]
  
      });
    }

  }
    
  
  listCategorias:Categoria[] = [];
  datosOrganizacion$:Observable<Organizacion | null>;
  form:FormGroup;
  titulo:string;
  modificar:boolean;
  listHoras:number[]=[1,2,3,4,5,6,7,8,9,10,11,12];
  duracion:number = 0;
  puntos:number = 0;

  ngOnInit(): void {
    
    this.cargarCategorias();
    
  }


  cargarCategorias():void{
    this.categoriaService.getCategorias().subscribe({
      next:(res)=>{
        
        this.listCategorias = res;

        //Una vez que ya se tienen las categorias, se modifica el valor de la categoria en el form para que se seleccione en el matSelect

        if(this.modificar){
          this.form.patchValue({
            categoriaId:this.dataTarea.category?.id,
       })
       };
      
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
        coordinatorId: idCoordinador!,
        points: formValue.puntos,
        date: formValue.fecha,
        place: formValue.lugar,
        categoryId: formValue.categoriaId,
        cantParticipantes:formValue.cantidadParticipantes,
        duracion:formValue.duracion

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
      categoryId: formValue.categoriaId,
      cantParticipantes: formValue.cantidadParticipantes,
      duracion:formValue.duracion
    }
    console.log(tareaModificada);
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
  
  calcularPuntos(categoria:Categoria = null!):void{
    
    if(categoria != null){
      
      if(this.form.value.categoriaId) this.puntos = categoria.puntosPorHora;
    }

    if(this.form.value.duracion) this.duracion = this.form.value.duracion;
   
    this.form.patchValue({
      puntos: this.puntos*this.duracion
    });
  }


}
