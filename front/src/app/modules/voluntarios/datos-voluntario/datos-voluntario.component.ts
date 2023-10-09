import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResumenVoluntario } from 'src/app/core/interfaces/resumenVoluntario';
import { Voluntario } from 'src/app/core/interfaces/voluntario';
import { VoluntarioService } from 'src/app/core/services/voluntario.service';

@Component({
  selector: 'app-datos-voluntario',
  templateUrl: './datos-voluntario.component.html',
  styleUrls: ['./datos-voluntario.component.css']
})
export class DatosVoluntarioComponent implements OnInit {

  constructor(private voluntarioService:VoluntarioService, fb:FormBuilder, private matSnackBar:MatSnackBar) {
   
    this.formVoluntario = fb.group({
      nombre:['',[Validators.required,Validators.minLength(2)]],
      apellido:['',[Validators.required,Validators.minLength(2)]],
      email:['',[Validators.required,Validators.email]],
      direccion:['',[Validators.required, Validators.minLength(5)]],
      telefono:['',[Validators.required, Validators.pattern(/^[0-9]{8,}$/)]]  
    });

    this.formPassword = fb.group({
      passwordActual:['',Validators.required],
      passwordNueva:['',Validators.required],

    });

    this.editarDatos = false;
    this.editarPassword = false;

    this.mostrarPasswordActual = false;
    this.mostrarPasswordNueva = false;

   }
   formVoluntario:FormGroup;
   datosVoluntario!:ResumenVoluntario;
   editarDatos:boolean;
   editarPassword:boolean;
   formPassword:FormGroup;

   mostrarPasswordActual:boolean;
   mostrarPasswordNueva:boolean;

   ngOnInit(): void {

    this.obtenerDatosVoluntario();
  }

  irModificar():void{
    this.editarDatos = true;
    this.cargarForm();
  }


  cargarForm():void{
    this.formVoluntario.patchValue({
      nombre: this.datosVoluntario.voluntario.name,
      apellido: this.datosVoluntario.voluntario.lastname,
      email: this.datosVoluntario.voluntario.email,
      direccion: this.datosVoluntario.voluntario.address,
      telefono: this.datosVoluntario.voluntario.phone
    });
  }

  obtenerDatosVoluntario():void{
    this.voluntarioService.obtenerDatosVoluntario().subscribe({
      next:(res)=>this.datosVoluntario = res!
    });
  }

  actualizarDatos():void{
    const dataForm = this.formVoluntario.value;
    const voluntario:Voluntario ={
      name: dataForm.nombre,
      lastname: dataForm.apellido,
      address: dataForm.direccion,
      email:dataForm.email,
      phone:dataForm.telefono,
      password: this.datosVoluntario.voluntario.password
    }

    this.voluntarioService.modificarVoluntario(this.datosVoluntario.voluntario.id!, voluntario).subscribe({
      next:()=>{
        this.matSnackBar.open("Los datos se actualizaron correctamente", "OK",{
          horizontalPosition:'center',
          verticalPosition:'top',
          duration:3000
        });
        this.editarDatos = false;
        this.formVoluntario.reset();
        this.obtenerDatosVoluntario();
      },
      error:(err)=>{
        this.matSnackBar.open("No se pudieron actualizar los datos","ERROR",{
          verticalPosition:'top',
          horizontalPosition:'center',
          duration:3000
        });
      }
    });
  }

  cancelarEdicionDatos():void{
    this.editarDatos = false;
    this.formVoluntario.reset();
  }

  cancelarEdicionPassword():void{
    this.editarPassword = false;
    this.formPassword.reset();
    this.mostrarPasswordActual = false;
    this.mostrarPasswordNueva = false;
  }

  actualizarPassword():void{


    this.voluntarioService.modificarPassword(this.datosVoluntario.voluntario.id!, this.formPassword.value.passwordActual, this.formPassword.value.passwordNueva).subscribe({
      next:()=>{
        this.matSnackBar.open("La contraseña se actualizó correctamente", "OK",{
          horizontalPosition:'center',
          verticalPosition:'top',
          duration:3000
        });
        this.cancelarEdicionPassword();
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
