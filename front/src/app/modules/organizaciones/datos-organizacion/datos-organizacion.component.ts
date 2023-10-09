import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Organizacion } from 'src/app/core/interfaces/organizacion';
import { ResumenOrganizacion } from 'src/app/core/interfaces/resumenOrganizacion';
import { OrganizacionService } from 'src/app/core/services/organizacion.service';

@Component({
  selector: 'app-datos-organizacion',
  templateUrl: './datos-organizacion.component.html',
  styleUrls: ['./datos-organizacion.component.css']
})
export class DatosOrganizacionComponent implements OnInit, OnDestroy {

  constructor(private organizacionService:OrganizacionService, fb:FormBuilder, private matSnackBar:MatSnackBar) {

    this.suscripcionDatos = this.organizacionService.getDatosOrganizacion.subscribe({
      next:(res)=> this.datosOrganizacion = res!
    });
    
    this.formOrganizacion = fb.group({
      nombre:['',[Validators.required, Validators.minLength(2)]],
      direccion:['',[Validators.required, Validators.minLength(5)]],
      telefono:['',[Validators.required, Validators.pattern(/^[0-9]{8,}$/)]],
      descripcion:['',[Validators.required,Validators.minLength(20)]],
      email:['',[Validators.required,Validators.email]]
    });

    this.editarDatos = false;
    this.editarPassword = false;

    this.formPassword = fb.group({
      passwordActual:['',Validators.required],
      passwordNuevo:['',Validators.required]
    });
    this.mostrarPasswordActual = false;
    this.mostrarPasswordNuevo = false;
   }
   
   datosOrganizacion!:ResumenOrganizacion;
   formOrganizacion:FormGroup;
   editarDatos:boolean;
   suscripcionDatos;
   editarPassword:boolean;
   formPassword:FormGroup;
   mostrarPasswordNuevo:boolean;
   mostrarPasswordActual:boolean;
   
  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    if(this.suscripcionDatos){
      this.suscripcionDatos.unsubscribe();
    }
  }
  irModificar():void{
    this.formOrganizacion.patchValue({
      nombre: this.datosOrganizacion.coordinador.name,
      direccion:this.datosOrganizacion.coordinador.address,
      telefono:this.datosOrganizacion.coordinador.phone,
      descripcion:this.datosOrganizacion.coordinador.description,
      email:this.datosOrganizacion.coordinador.email
    });
    this.editarDatos = true;
  }


  actualizarDatos():void{
    const dataForm = this.formOrganizacion.value;

    const organizacion:Organizacion = {
      name:dataForm.nombre,
      address:dataForm.direccion,
      description:dataForm.descripcion,
      email:dataForm.email,
      phone:dataForm.telefono,
      password:this.datosOrganizacion.coordinador.password
    }

    this.organizacionService.modificarOrganizacion(this.datosOrganizacion.coordinador.id!, organizacion).subscribe({
      next:()=>{
        this.matSnackBar.open("Los datos se actualizaron correctamente", "OK",{
          horizontalPosition:'center',
          verticalPosition:'top',
          duration:3000
        });
        this.formOrganizacion.reset();
        this.editarDatos = false;

      },
      error:()=>{
        this.matSnackBar.open("No se pudieron actualizar los datos","ERROR",{
          verticalPosition:'top',
          horizontalPosition:'center',
          duration:3000
        });
      }
    });

  }

  cancelarModificacion():void{
    this.editarDatos = false;
    this.formOrganizacion.reset();
  }

  cancelarModificacionPassword():void{
    this.editarPassword = false;
    this.formPassword.reset();
    this.mostrarPasswordActual = false;
    this.mostrarPasswordNuevo = false;
  }

  actualizarPassword():void{

    const formValue = this.formPassword.value;

    this.organizacionService.modificarPassword(this.datosOrganizacion.coordinador.id!, formValue.passwordActual,formValue.passwordNuevo).subscribe({
      next:()=>{
        this.matSnackBar.open("La contraseña se actualizó correctamente", "OK",{
          horizontalPosition:'center',
          verticalPosition:'top',
          duration:3000
        });
        this.cancelarModificacionPassword();
        
      },
      error:()=>{
        this.matSnackBar.open("Error al actualizar la contraseña", "ERROR",{
          horizontalPosition:'center',
          verticalPosition:'top',
          duration:3000
        });

      }
    });
  }

}