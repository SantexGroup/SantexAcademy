import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Organizacion } from 'src/app/core/interfaces/organizacion';
import { OrganizacionService } from 'src/app/core/services/organizacion.service';

@Component({
  selector: 'app-registro-organizacion',
  templateUrl: './registro-organizacion.component.html',
  styleUrls: ['./registro-organizacion.component.css']
})
export class RegistroOrganizacionComponent implements OnInit {

  constructor(fb:FormBuilder, private router:Router, private organizacionService:OrganizacionService,
    private matSnackBar:MatSnackBar){
    this.formRegistro = fb.group({
      nombre:['',[Validators.required, Validators.minLength(2)]],
      direccion:['',[Validators.required, Validators.minLength(5)]],
      telefono:['',[Validators.required, Validators.pattern(/^[0-9]{8,}$/)]],
      descripcion:['',[Validators.required,Validators.minLength(20)]],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]//Ver que validacion hay que agregarle
    });
  }
  
  formRegistro:FormGroup;
  
  ngOnInit(): void {

  }

  

  crearOrganizacion():void{
    const formValue = this.formRegistro.value;

    const organizacion:Organizacion = {
      
      name: formValue.nombre,
      email:formValue.email,
      address: formValue.direccion,
      phone:formValue.telefono.toString(),
      password:formValue.password,
      description:formValue.descripcion
    }
    
    this.organizacionService.crearOrganizacion(organizacion).subscribe({
      next:()=>{
        this.matSnackBar.open('Registro Exitoso!','OK',{
          duration:3000,
        horizontalPosition:'center',
        verticalPosition:'top'});
        this.irLoginOrganizacion();
      },
      error:(error)=>{ console.log(error);
        this.matSnackBar.open('Error al registrarse','ERROR',{
          duration:3000,
        horizontalPosition:'center',
        verticalPosition:'top'}
        );
      }
    });

  }


  irLoginOrganizacion():void{

    const params = {tipo:'organizacion'};

    this.router.navigate(["index/login"],{queryParams:params});
  }
}
