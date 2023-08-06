import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-organizacion',
  templateUrl: './registro-organizacion.component.html',
  styleUrls: ['./registro-organizacion.component.css']
})
export class RegistroOrganizacionComponent implements OnInit {

  constructor(fb:FormBuilder, private router:Router){
    this.formRegistro = fb.group({
      nombre:['',[Validators.required]],
      direccion:['',Validators.required],
      celular:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }
  
  formRegistro:FormGroup;
  //private organizacionService:OrganizacionService
  
  ngOnInit(): void {

  }

  

  crearOrganizacion():void{
    // const formValue = this.formRegistro.value;

    // const organizacion:Organizacion = {
      
    //   nombre: formValue.nombre,
    //   email:formValue.email,
    //   direccion: formValue.direccion,
    //   telefono:formValue.telefono,
    //   password:formValue.password
    // }
    // console.log("*******FORM VALUE**********")
    // console.log(formValue);

    // console.log("*********ORGANIZACION***********");
    // console.log(organizacion);
    // this.organizacionService.crearOrganizacion(organizacion).subscribe({
    //   next:(res)=>{
    //     console.log(res);
    //   },
    //   error:(err)=>{
    //     console.log(err);
    //   }
    // });

  }


  irLoginOrganizacion():void{

    const params = {tipo:'organizacion'};

    this.router.navigate(["index/login"],{queryParams:params});
  }
}
