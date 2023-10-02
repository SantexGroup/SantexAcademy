import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';// Borrar si no se usa

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './modules/share/error-page/error-page.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { PagesModule } from './modules/pages/pages.module';
import { ShareModule } from './modules/share/shares.module';
import { RegisterModule } from './modules/register/register.module';

import { PerfilAlumnoComponent } from './modules/pages/perfil-alumno/perfil-alumno.component';//BORRAR si no se usa
import { EstadoUsuarioDirective } from './directivas/estado-usuario.directive';// Borrar si no se usa
import { ActivardesactivarcursoDirective } from './directivas/activardesactivarcurso.directive';// Borrar si no se usa
//import { LoginComponent } from './modules/auth/pages/login/login.component';//BORRAR si no se usa
import { MisCursosComponent } from './modules/pages/mis-cursos/mis-cursos.component';
import { NotificationComponent } from './modules/pages/notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    //LoginComponent,//BORRAR si no se usa
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    PagesModule,
    ShareModule,
    RegisterModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  
  ]
})

export class AppModule {
  constructor() {
    
    const localStorageCleared = localStorage.getItem('localStorageCleared');// Verifica si ya se ha limpiado el localStorage
    if (!localStorageCleared) {
      localStorage.clear(); // Limpia datos al cargar por primera vez
      localStorage.setItem('localStorageCleared', 'true');// Marca que se ha limpiado el localStorage
    }
  }
}