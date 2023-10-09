import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Voluntario } from 'src/app/core/interfaces/voluntario';
import { VoluntarioService } from 'src/app/core/services/voluntario.service';

@Component({
  selector: 'app-registro-voluntarios',
  templateUrl: './registro-voluntarios.component.html',
  styleUrls: ['./registro-voluntarios.component.css']
})
export class RegistroVoluntariosComponent implements OnInit {

  constructor(fb:FormBuilder, private router:Router,private voluntarioService:VoluntarioService, private matSnackBar:MatSnackBar){
    this.formRegistro = fb.group({
      nombre:['',[Validators.required,Validators.minLength(2)]],
      apellido:['',[Validators.required,Validators.minLength(2)]],
      email:['',[Validators.required,Validators.email]],
      direccion:['',[Validators.required, Validators.minLength(5)]],
      telefono:['',[Validators.required, Validators.pattern(/^[0-9]{8,}$/)]],
      password:['',Validators.required] //Consultar que validación le agregamos a password 
    });
  }
  
  formRegistro:FormGroup;


  
  
  ngOnInit(): void {
  }
  
  
  crearVoluntario():void{
    const formValue = this.formRegistro.value;

    const voluntario:Voluntario = {
      
      name: formValue.nombre,
      lastname: formValue.apellido,
      email:formValue.email,
      address: formValue.direccion,
      phone:formValue.telefono.toString(),
      password:formValue.password
    }
    
    

    this.voluntarioService.crearVoluntario(voluntario).subscribe({
      next:()=>{

        this.matSnackBar.open('Registro Exitoso!','OK',{
          duration:3000,
        horizontalPosition:'center',
        verticalPosition:'top'});

        this.irLoginVoluntario();

        
        
      },
      error:()=>{
        this.matSnackBar.open('Error al registrarse','ERROR',{
          duration:3000,
        horizontalPosition:'center',
        verticalPosition:'top'}
        );
      }
    });

  }

  irLoginVoluntario():void{

    const params = {tipo:'voluntario'}

    this.router.navigate(["index/login"],{queryParams:params});
  }
}
