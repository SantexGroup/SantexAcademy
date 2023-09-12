import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './modules/share/error-page/error-page.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { PagesModule } from './modules/pages/pages.module';
import { ShareModule } from './modules/share/shares.module';
import { RegisterModule } from './modules/register/register.module';
import { PerfilAlumnoComponent } from './modules/pages/perfil-alumno/perfil-alumno.component';
//import { ActivardesactivarcursoDirective } from './directivas/activardesactivarcurso.directive';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    PerfilAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    PagesModule,
    ShareModule,
    RegisterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
