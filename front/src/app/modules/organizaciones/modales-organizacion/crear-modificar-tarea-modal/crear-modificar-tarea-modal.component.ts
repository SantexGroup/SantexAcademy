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
import { ResumenOrganizacion } from 'src/app/core/interfaces/resumenOrganizacion';

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
    this.form = fb.group({
      nombre:['', [Validators.required, Validators.maxLength(30)]],
      descripcion:['',[Validators.required, Validators.maxLength(250)]],
      puntos:['',[Validators.required,Validators.max(200000)]],
      fecha:['',Validators.required],
      direccion:['',[Validators.required, Validators.maxLength(100)]],
      categoriaId:['',Validators.required],
      cantidadParticipantes:['',[Validators.required, Validators.max(10000)]],
      duracion:['',Validators.required],
      horaInicio:['', Validators.required]

    });
                
    if(dataTarea){
      
      this.titulo ='Modificar Tarea';
      this.modificar = true;
      this.duracion = this.dataTarea.duracion;
      this.puntos = this.dataTarea.points / this.dataTarea.duracion;
      this.longitud = this.dataTarea.longitud;
      this.latitud = this.dataTarea.latitud;
      this.direccionFormateada = this.dataTarea.place;
    
    }
    else{

      this.titulo = 'Crear Tarea';
      this.modificar = false;
      
    }

  }
  
  @ViewChild('inputDireccion') inputDireccion!: ElementRef;
  
  listCategorias:Categoria[] = [];
  datosOrganizacion$:Observable<ResumenOrganizacion | null>;
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
    types: ['geocode'], 
    componentRestrictions: { country: 'AR' }, 
  };
  
  ngOnInit(): void {
    
    this.cargarCategorias();
  if(this.modificar){

    const fechaMoment = moment(this.dataTarea.date);
    this.form.patchValue({
      nombre:this.dataTarea.name,
      descripcion:this.dataTarea.description,
      puntos:this.dataTarea.points,
      fecha: fechaMoment.toDate(),
      direccion:this.dataTarea.place,
      categoriaId: this.dataTarea.categoryId,
      cantidadParticipantes:this.dataTarea.cantParticipantes,
      duracion:this.dataTarea.duracion,
      horaInicio:this.dataTarea.hora
  
    }); 
    
  }

  }
  
  ngAfterViewInit(): void {
    
    this.autocomplete = new google.maps.places.Autocomplete(this.inputDireccion.nativeElement,this.autocompleteOptions);
    
    this.autocomplete.addListener('place_changed',()=>{
      const direccion = this.autocomplete?.getPlace();
      this.latitud = direccion?.geometry?.location?.lat()!;
      this.longitud = direccion?.geometry?.location?.lng()!;
      this.direccionFormateada = direccion?.formatted_address!;

      
    });
  }
  
  cargarCategorias():void{
    this.categoriaService.getCategorias().subscribe({
      next:(res)=>{
        
        this.listCategorias = res;
      },
      error:()=> {
        
      
      }
    });
  }

  crearTarea():void{

    let idCoordinador = null;
    this.datosOrganizacion$.pipe(take(1)).subscribe({
      next:(res)=>{
        idCoordinador = res?.coordinador.id;
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
      
      if(this.form.value.categoriaId) {
          
        this.puntos = categoria.puntosPorHora;
      }
    }
    

    if(this.form.value.duracion) this.duracion = this.form.value.duracion;
   
    this.form.patchValue({
      puntos:  (this.puntos*this.duracion).toString()
    });
  }

}
