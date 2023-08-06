import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-voluntarios',
  templateUrl: './registro-voluntarios.component.html',
  styleUrls: ['./registro-voluntarios.component.css']
})
export class RegistroVoluntariosComponent implements OnInit {

  constructor(fb:FormBuilder, private router:Router){
    this.formRegistro = fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      direccion:['',Validators.required],
      celular:['',[Validators.required]],
      password:['',Validators.required]
    });
  }
  //,private voluntarioService:VoluntarioService
  formRegistro:FormGroup;


  
  
  ngOnInit(): void {
  }
  
  
  crearVoluntario():void{
    // const formValue = this.formRegistro.value;

    // const voluntario:Voluntario = {
      
    //   nombre: formValue.nombre,
    //   apellido: formValue.apellido,
    //   email:formValue.email,
    //   direccion: formValue.direccion,
    //   telefono:formValue.telefono,
    //   password:formValue.password
    // }
    // console.log("*******FORM VALUE**********")
    // console.log(formValue);

    // console.log("*********VOLUNTARIO***********");
    // console.log(voluntario);
    // this.voluntarioService.crearVoluntario(voluntario).subscribe({
    //   next:(res)=>{
    //     console.log(res);
    //   },
    //   error:(err)=>{
    //     console.log(err);
    //   }
    // });

  }

  irLoginVoluntario():void{

    const params = {tipo:'voluntario'}

    this.router.navigate(["index/login"],{queryParams:params});
  }
}
