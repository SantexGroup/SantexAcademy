import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { VoluntarioService } from 'src/app/core/services/voluntario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(fb:FormBuilder,private routeActive:ActivatedRoute, private router:Router, private voluntarioService:VoluntarioService, private matSnackBar:MatSnackBar ) {

    this.formLogin = fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    });
    this.voluntario = false;
    this.organizacion = false;
    this.titulo = '';
    this.mostrarPassword = false;

   }

  ngOnInit(): void {
    
    this.routeActive.queryParams.subscribe(params=>{
      
      this.formLogin.reset();
      

      if(params){
        const parametro = params['tipo'];
        if(parametro==='organizacion'){
          this.organizacion = true;
          this.voluntario = false;
          this.titulo = "Organizaciones"
          
        }
        else if(parametro==='voluntario'){
          this.voluntario = true;
          this.organizacion = false;
          this.titulo = "Voluntarios"
        }
        else{
          this.router.navigate(['index']);
        }

      }
      else{
        this.router.navigate(['index']);
      }
    });

  }

  organizacion:boolean;
  voluntario:boolean;
  titulo:string;
  formLogin:FormGroup;
  mostrarPassword:boolean;

  iniciarSesion(){
    if(this.voluntario){
      //Inicio de sesion voluntario
      const credenciales = {
        email:this.formLogin.value.email,
        password:this.formLogin.value.password
      }

      this.voluntarioService.iniciarSesion(credenciales).subscribe({
        next:(res)=>{
          this.matSnackBar.open('Inicio de sesión exitoso!','OK',{
            duration:3000,
          horizontalPosition:'center',
          verticalPosition:'top'});
          console.log(res.token);
          this.router.navigate(['/']);
          
        },
        error:(err)=>{
          this.matSnackBar.open('Error al iniciar sesión','ERROR',{
            duration:3000,
          horizontalPosition:'center',
          verticalPosition:'top'}
          );
          console.log(err);
        }
      });


    }

    if(this.organizacion){
      //Inicio de sesion Organizacion
      console.log("Inicio de sesión organización");
    }
  }

  irRegistro():void{

    if(this.organizacion){
      this.router.navigate(['index/registro-organizacion']);

    }

    if(this.voluntario){
      this.router.navigate(['index/registro-voluntario']);
      
    }

  }

}
