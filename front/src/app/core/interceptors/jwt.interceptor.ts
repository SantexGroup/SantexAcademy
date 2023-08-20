import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { VoluntarioService } from '../services/voluntario.service';
import { Credencial } from '../interfaces/credencial';
import { ApiService } from '../http/api.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private voluntarioService:VoluntarioService) {}
  credencialesVoluntario!:Credencial|null;
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    this.voluntarioService.getCredencialesVoluntario.pipe(take(1)).subscribe({
      next:(res)=>this.credencialesVoluntario = res
    });
    
    if(this.credencialesVoluntario!= null){
      request = request.clone({
        setHeaders:{
          Authorization:`Bearer ${this.credencialesVoluntario.token}`
        }
      });

    }
    
    return next.handle(request);
  }
}
