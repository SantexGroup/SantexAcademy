import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Voluntario } from 'src/app/core/interfaces/voluntario';
import { VoluntarioService } from 'src/app/core/services/voluntario.service';

@Component({
  selector: 'app-datos-voluntario',
  templateUrl: './datos-voluntario.component.html',
  styleUrls: ['./datos-voluntario.component.css']
})
export class DatosVoluntarioComponent implements OnInit, OnDestroy {

  constructor(private voluntarioService:VoluntarioService, fb:FormBuilder, private matSnackBar:MatSnackBar) {
    this.suscripcionObservable = voluntarioService.getDatosVoluntario.subscribe({
      next:(res)=>this.datosVoluntario = res!
    });
    this.formVoluntario = fb.group({
      nombre:['',[Validators.required,Validators.minLength(2)]],
      apellido:['',[Validators.required,Validators.minLength(2)]],
      email:['',[Validators.required,Validators.email]],
      direccion:['',[Validators.required, Validators.minLength(5)]],
      telefono:['',[Validators.required, Validators.pattern(/^[0-9]{8,}$/)]]  
    });

    this.editarDatos = false;
   }
   suscripcionObservable;
   formVoluntario:FormGroup;
   datosVoluntario!:Voluntario;
   editarDatos:boolean;
   
   ngOnInit(): void {
     
  }

  ngOnDestroy(): void {
    if(this.suscripcionObservable){

      this.suscripcionObservable.unsubscribe();
    }
  }
  
  irModificar():void{
    this.editarDatos = true;
    this.cargarForm();
  }


  cargarForm():void{
    this.formVoluntario.patchValue({
      nombre: this.datosVoluntario.name,
      apellido: this.datosVoluntario.lastname,
      email: this.datosVoluntario.email,
      direccion: this.datosVoluntario.address,
      telefono: this.datosVoluntario.phone
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
      password: this.datosVoluntario.password
    }

    this.voluntarioService.modificarVoluntario(this.datosVoluntario.id!, voluntario).subscribe({
      next:()=>{
        this.matSnackBar.open("Los datos se actualizaron correctamente", "OK",{
          horizontalPosition:'center',
          verticalPosition:'top',
          duration:3000
        });
        this.editarDatos = false;
        this.formVoluntario.reset();
      },
      error:(err)=>{
        this.matSnackBar.open("No se pudieron actualizar los datos","ERROR",{
          verticalPosition:'top',
          horizontalPosition:'center',
          duration:3000
        });
        console.log(err);
      }
    });
  }


}
