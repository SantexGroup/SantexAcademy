import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Credencial } from 'src/app/core/interfaces/credencial';
import { DatosLogin } from 'src/app/core/interfaces/datosLogin';
import { AdminService } from 'src/app/core/services/admin.service';
import { CuentaService } from 'src/app/core/services/cuenta.service';
import { OrganizacionService } from 'src/app/core/services/organizacion.service';
import { VoluntarioService } from 'src/app/core/services/voluntario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(fb:FormBuilder,private routeActive:ActivatedRoute, private router:Router,private cuentaService:CuentaService ,private matSnackBar:MatSnackBar) {

    this.formLogin = fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    });
    this.mostrarPassword = false;

    this.obtenerCredenciales();
    
   }
   credencialesUsuario:Credencial|null = null;
   formLogin:FormGroup;
   mostrarPassword:boolean;

  ngOnInit(): void {

    this.verificarSesion();


  }

  iniciarSesion(){
    const credenciales:DatosLogin = {
      email:this.formLogin.value.email,
      password:this.formLogin.value.password
    }
    
    this.cuentaService.login(credenciales).subscribe({
        next:(res)=>{
          this.matSnackBar.open('Inicio de sesión exitoso!','OK',{
            duration:3000,
          horizontalPosition:'center',
          verticalPosition:'top'});

          console.log(res);

          this.router.navigate([res.tipo]);
          
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

  irRegistro():void{

  }

  obtenerCredenciales():void{
    
    this.cuentaService.getCredencialesUsuario.pipe(take(1)).subscribe({
      next:(res)=> this.credencialesUsuario = res
    });
  }

  verificarSesion():void{
    if(this.credencialesUsuario !== null) this.router.navigate(['/index']);
  }

}
