import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, take, throwError } from 'rxjs';
import { VoluntarioService } from '../services/voluntario.service';
import { Credencial } from '../interfaces/credencial';
import { ApiService } from '../http/api.service';
import { OrganizacionService } from '../services/organizacion.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../services/admin.service';
import { SpinnerService } from '../services/spinner.service';
import { CuentaService } from '../services/cuenta.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private cuentaService:CuentaService,private router:Router, private matSnackBar:MatSnackBar,
     private spinnerService:SpinnerService) {}

  credencialesUsuario:Credencial|null = null;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    this.spinnerService.mostrar();

    this.cuentaService.getCredencialesUsuario.pipe(take(1)).subscribe({next:(res)=> this.credencialesUsuario = res});
    
       if(this.credencialesUsuario !== null){
         request = request.clone({
           setHeaders:{
             Authorization:`Bearer ${this.credencialesUsuario.token}`
           }
         });
    
    

      return next.handle(request).pipe(catchError((err:HttpErrorResponse)=>{
        if(err.status ===401){

          
          
          this.cuentaService.setCredencialesUsuario = null;
          this.mostrarAlertaSesionCaducada();
          this.router.navigate(['/index/login']);
        }

        return throwError(()=>err);
      }), 
      finalize(()=>{
        this.spinnerService.ocultar();
      })); 

    }

    return next.handle(request).pipe(finalize(()=>this.spinnerService.ocultar()));
    
    
  }


  mostrarAlertaSesionCaducada():void{
    this.matSnackBar.open('Sesión Caducada','ERROR',{
      duration:3000,
    horizontalPosition:'center',
    verticalPosition:'top'}
    );
  }



}
