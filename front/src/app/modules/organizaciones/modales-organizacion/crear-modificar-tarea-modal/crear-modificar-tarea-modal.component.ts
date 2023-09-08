///<reference path="../../../../../../node_modules/@types/google-maps/index.d.ts"/>

import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
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
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-crear-tarea-modal',
  templateUrl: './crear-modificar-tarea-modal.component.html',
  styleUrls: ['./crear-modificar-tarea-modal.component.css']
})
export class CrearModificarTareaModalComponent implements OnInit, AfterViewInit {

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
      this.longitud = this.dataTarea.longitud;
      this.latitud = this.dataTarea.latitud;
      this.direccionFormateada = this.dataTarea.place;

      const fechaMoment = moment(this.dataTarea.date);
      
      this.form = fb.group({
        nombre:[this.dataTarea.name, Validators.required],
        descripcion:[this.dataTarea.description,Validators.required],
        puntos:[this.dataTarea.points,Validators.required],
        fecha:[fechaMoment.toDate(),Validators.required],
        direccion:[this.dataTarea.place,Validators.required],
        categoriaId:['',Validators.required],
        cantidadParticipantes:[this.dataTarea.cantParticipantes,Validators.required],
        duracion:[this.dataTarea.duracion, Validators.required],
        horaInicio:[this.dataTarea.hora, Validators.required]
  
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
        direccion:['',Validators.required],
        categoriaId:['',Validators.required],
        cantidadParticipantes:['',Validators.required],
        duracion:['',Validators.required],
        horaInicio:['', Validators.required]
  
      });
    }

  }
  
  @ViewChild('inputDireccion') inputDireccion!: ElementRef;
  
  listCategorias:Categoria[] = [];
  datosOrganizacion$:Observable<Organizacion | null>;
  form:FormGroup;
  titulo:string;
  modificar:boolean;
  listHoras:number[]=[1,2,3,4,5,6,7,8,9,10,11,12];
  duracion:number = 0;
  puntos:number = 0;
  horariosDisponibles : number[] = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  autocomplete: google.maps.places.Autocomplete | undefined;
  latitud:number = 0;
  longitud:number = 0;
  direccionFormateada:string = '';

  autocompleteOptions = {
    types: ['geocode'], // Puedes ajustar los tipos según tus necesidades.
    componentRestrictions: { country: 'AR' }, // 'AR' es el código de país para Argentina.
  };
  
  ngOnInit(): void {
    
    this.cargarCategorias();
    
  }
  
  ngAfterViewInit(): void {
    
    this.autocomplete = new google.maps.places.Autocomplete(this.inputDireccion.nativeElement,this.autocompleteOptions);
    
    this.autocomplete.addListener('place_changed',()=>{
      const direccion = this.autocomplete?.getPlace();
      this.latitud = direccion?.geometry?.location?.lat()!;
      this.longitud = direccion?.geometry?.location?.lng()!;
      this.direccionFormateada = direccion?.formatted_address!;

      // console.log('direccion:'+ lugar?.formatted_address);
      // console.log('latitud:'+ lugar?.geometry?.location?.lat());
      // console.log('longitud:'+ lugar?.geometry?.location?.lng());
    });
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
        place: this.direccionFormateada,
        categoryId: formValue.categoriaId,
        cantParticipantes:formValue.cantidadParticipantes,
        duracion:formValue.duracion,
        hora:formValue.horaInicio,
        latitud:this.latitud,
        longitud:this.longitud

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
      place: this.direccionFormateada,
      categoryId: formValue.categoriaId,
      cantParticipantes: formValue.cantidadParticipantes,
      duracion:formValue.duracion,
      hora:formValue.horaInicio,
      latitud:this.latitud,
      longitud:this.longitud
    }
    this.tareaService.modificarTarea(this.dataTarea.id!, tareaModificada).subscribe({
      next:()=>{
        this.matSnackBar.open("Tarea Modificada","OK",{horizontalPosition:'center', verticalPosition:'top', duration:3000});
          this.dialogoActual.close(true);
      },
      error:()=>{
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
