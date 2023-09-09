import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, take, throwError } from 'rxjs';
import { VoluntarioService } from '../services/voluntario.service';
import { Credencial } from '../interfaces/credencial';
import { ApiService } from '../http/api.service';
import { OrganizacionService } from '../services/organizacion.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../services/admin.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private voluntarioService:VoluntarioService, private organizacionService:OrganizacionService,private router:Router, private matSnackBar:MatSnackBar,
    private adminService:AdminService) {}
  credencialesVoluntario:Credencial|null = null;
  credencialesOrganizacion:Credencial|null = null;
  credencialesAdmin:Credencial|null = null;
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    this.voluntarioService.getCredencialesVoluntario.pipe(take(1)).subscribe({
      next:(res)=>this.credencialesVoluntario = res
    });
    
    this.organizacionService.getCredencialesOrganizacion.pipe(take(1)).subscribe({
      next:(res)=> this.credencialesOrganizacion = res
    });

    this.adminService.getCredencialesAdmin.pipe(take(1)).subscribe({
      next:(res)=>this.credencialesAdmin = res
    });

    

    if(this.credencialesVoluntario!= null){
      request = request.clone({
        setHeaders:{
          Authorization:`Bearer ${this.credencialesVoluntario.token}`
        }
      });
      
      return next.handle(request).pipe(catchError((error:HttpErrorResponse)=>{
       if(error.status === 401){

        this.voluntarioService.setCredencialesVoluntario = null;
        this.mostrarAlertaSesionCaducada();
        this.router.navigate(['/index/login'],{queryParams:{tipo:'voluntario'}});
        
      };
        
        return throwError(()=>error); 
      }
      ));  
    }
    else if(this.credencialesOrganizacion!= null){
      request = request.clone({
        setHeaders:{
          Authorization:`Bearer ${this.credencialesOrganizacion.token}`
        }
      });
      return next.handle(request).pipe(catchError((err:HttpErrorResponse)=>{
        if(err.status ===401){

          this.organizacionService.setCredencialesOrganizacion = null;
          this.mostrarAlertaSesionCaducada();
          this.router.navigate(['/index/login'],{queryParams:{tipo:'organizacion'}});
          

        }

        return throwError(()=>err);
      }));    
    }
    else if(this.credencialesAdmin != null){
      request = request.clone({
        setHeaders:{
          Authorization:`Bearer ${this.credencialesAdmin.token}`
        }
      });
      return next.handle(request).pipe(catchError((err:HttpErrorResponse)=>{
        if(err.status ===401){

          this.adminService.setCredencialesAdmin = null;
          this.mostrarAlertaSesionCaducada();
          this.router.navigate(['/index/login'],{queryParams:{tipo:'admin'}});
          

        }

        return throwError(()=>err);
      }));    
    }
    else{
      return next.handle(request);
    }
    
  }


  mostrarAlertaSesionCaducada():void{
    this.matSnackBar.open('Sesión Caducada','ERROR',{
      duration:3000,
    horizontalPosition:'center',
    verticalPosition:'top'}
    );
  }



}
