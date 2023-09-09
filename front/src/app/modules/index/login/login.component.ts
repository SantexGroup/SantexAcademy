import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Credencial } from 'src/app/core/interfaces/credencial';
import { DatosLogin } from 'src/app/core/interfaces/datosLogin';
import { AdminService } from 'src/app/core/services/admin.service';
import { OrganizacionService } from 'src/app/core/services/organizacion.service';
import { VoluntarioService } from 'src/app/core/services/voluntario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(fb:FormBuilder,private routeActive:ActivatedRoute, private router:Router, private voluntarioService:VoluntarioService, private matSnackBar:MatSnackBar,
              private organizacionService:OrganizacionService, private adminService:AdminService ) {

    this.formLogin = fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    });
    this.voluntario = false;
    this.organizacion = false;
    this.admin = false;
    this.titulo = '';
    this.mostrarPassword = false;

    this.obtenerCredenciales();
    
   }
   
   admin:boolean;
   organizacion:boolean;
   voluntario:boolean;
   titulo:string;
   formLogin:FormGroup;
   mostrarPassword:boolean;
   credencialesOrganizacion:Credencial|null = null;
   credencialesVoluntario:Credencial|null = null;
   credencialesAdmin:Credencial|null = null;

  ngOnInit(): void {

    this.verificarSesion();


    this.routeActive.queryParams.subscribe(params=>{
      
      this.formLogin.reset();
      

      if(params){
        const parametro = params['tipo'];
        if(parametro==='organizacion'){
          this.organizacion = true;
          this.voluntario = false;
          this.admin = false;
          this.titulo = "Organizaciones"
          
        }
        else if(parametro==='voluntario'){
          this.voluntario = true;
          this.organizacion = false;
          this.admin = false;
          this.titulo = "Voluntarios"
        }
        else if(parametro==='admin'){

          this.voluntario = false;
          this.organizacion = false;
          this.admin = true;

          this.titulo = "Administrador"

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

  iniciarSesion(){
    const credenciales:DatosLogin = {
      email:this.formLogin.value.email,
      password:this.formLogin.value.password
    }
    
    if(this.voluntario){
      //Inicio de sesion voluntario

      this.voluntarioService.iniciarSesion(credenciales).subscribe({
        next:()=>{
          this.matSnackBar.open('Inicio de sesión exitoso!','OK',{
            duration:3000,
          horizontalPosition:'center',
          verticalPosition:'top'});
          this.router.navigate(['/voluntarios']);
          
        },
        error:()=>{
          this.matSnackBar.open('Error al iniciar sesión','ERROR',{
            duration:3000,
          horizontalPosition:'center',
          verticalPosition:'top'}
          );
        }
      });


    }

    if(this.organizacion){

      this.organizacionService.iniciarSesion(credenciales).subscribe({
        next:()=>{
          this.matSnackBar.open('Inicio de sesión exitoso!','OK',{
            duration:3000,
          horizontalPosition:'center',
          verticalPosition:'top'});

          this.router.navigate(['/organizaciones']);
        },
        error:(err)=>{
          this.matSnackBar.open('Error al iniciar sesión','ERROR',{
            duration:3000,
          horizontalPosition:'center',
          verticalPosition:'top'}
          );
        }
      });
      
    }

    if(this.admin){
      
      this.adminService.iniciarSesion(credenciales).subscribe({
        next:()=>{
          this.matSnackBar.open('Inicio de sesión exitoso!','OK',{
            duration:3000,
          horizontalPosition:'center',
          verticalPosition:'top'});

          this.router.navigate(['/admin']);
          
        },
        error:()=>{
          this.matSnackBar.open('Error al iniciar sesión','ERROR',{
            duration:3000,
          horizontalPosition:'center',
          verticalPosition:'top'}
          );
        }
      });

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

  obtenerCredenciales():void{
    this.organizacionService.getCredencialesOrganizacion.pipe(take(1)).subscribe({
      next:(res)=> this.credencialesOrganizacion = res
    });

    this.voluntarioService.getCredencialesVoluntario.pipe(take(1)).subscribe({
      next:(res)=> this.credencialesVoluntario = res
    });

    this.adminService.getCredencialesAdmin.pipe(take(1)).subscribe({
      next:(res)=> this.credencialesAdmin = res
    });
  }

  verificarSesion():void{
    if(this.credencialesVoluntario !== null || this.credencialesOrganizacion !== null || this.credencialesAdmin !== null) this.router.navigate(['/index']);
  }

}
