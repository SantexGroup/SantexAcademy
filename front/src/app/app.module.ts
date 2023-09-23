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
import { PerfilAlumnoComponent } from './modules/pages/perfil-alumno/perfil-alumno.component';
import { EstadoUsuarioDirective } from './directivas/estado-usuario.directive';// Borrar si no se usa
import { ActivardesactivarcursoDirective } from './directivas/activardesactivarcurso.directive';
import { LoginComponent } from './modules/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    PerfilAlumnoComponent,
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
export class AppModule { }
