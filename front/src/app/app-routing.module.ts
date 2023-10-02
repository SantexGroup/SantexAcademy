import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPageComponent } from './modules/dashboard/dashboard-page/dashboard-page.component';
import { RegisterverificationComponent } from './modules/register/registerverification/registerverification.component';
import { QuienessomosComponent } from './modules/pages/quienessomos/quienessomos.component';
import { IntegranteComponent } from './modules/pages/integrante/integrante.component';
import { CatalogoComponent } from './modules/pages/catalogo/catalogo.component';
import { RegisterformComponent } from './modules/register/registerform/registerform.component';
import { RegisteranswerComponent } from './modules/register/registeranswer/registeranswer.component';
import { ErrorPageComponent } from './modules/share/error-page/error-page.component';
import { AdminComponent } from './modules/pages/admin/admin.component';
import { PerfilAlumnoComponent } from './modules/pages/perfil-alumno/perfil-alumno.component';
import { ValidarTokenGuard } from './core/guards/validar-token.guard';
import { TieneTipoDeUsuarioGuard } from './core/guards/tiene-tipo-de-usuario.guard'
//import { LoginComponent } from './modules/auth/pages/login/login.component';
import { LoginComponent } from './modules/login/login/login.component';
import { MisCursosComponent } from './modules/pages/mis-cursos/mis-cursos.component';
import { AulaVirtualComponent } from './modules/pages/aula-virtual/aula-virtual.component';
import { PerfilAlumnoEditarComponent } from './modules/pages/perfil-alumno-editar/perfil-alumno-editar.component';
import { PerfilDocenteComponent } from './modules/pages/perfil-docente/perfil-docente.component';
import { DocenteespecialidadComponent } from './modules/pages/docenteespecialidad/docenteespecialidad.component';
import { DocentecursoComponent } from './modules/pages/docentecurso/docentecurso.component';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then( m => m.UsersModule),
  },
  {
    path: 'cursos',
    loadChildren: () => import('./modules/cursos/cursos.module').then( m => m.CursosModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'protected',
    loadChildren: () => import('./modules/protected/protected.module').then(m => m.ProtectedModule),
    // canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ],
    // canActivate: [ ValidarTokenGuard ,TieneTipoDeUsuarioGuard],
    // data: {
    //   tipoPermitido: ['Alumno']
    // },
  },
  {
    path: 'dashboard',
    component:DashboardPageComponent,
  },
  {
    path: 'user/verifyLink',
    component: RegisterverificationComponent,
    pathMatch: 'full',
    runGuardsAndResolvers: 'always',
    data: {
      expectedParam: 'codeRegister',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'quienes-somos',
    component:QuienessomosComponent,
  },
  {
    path: 'quienes-somos/:id',
    component:IntegranteComponent,
  },
  {
    path: 'catalogo-cursos',
    component:CatalogoComponent,
    // canActivate: [ ValidarTokenGuard ],
    // canLoad: [ ValidarTokenGuard ]
  },
  {
    path: 'register',
    component: RegisterformComponent,
  },
  {
    path: 'registeranswer',
    component: RegisteranswerComponent,
  },
  {
    path: 'admin',
    canLoad: [ ValidarTokenGuard ],
    canActivate: [ ValidarTokenGuard ,TieneTipoDeUsuarioGuard],
    data: {
      tipoPermitido: ['Administrador']
    },
    component: AdminComponent,
  },
  {
    path: 'perfil-alumno',
    component: PerfilAlumnoComponent, 
  },
  {
    path: 'perfil-alumno/editar',
    component: PerfilAlumnoEditarComponent, 
  },
  { 
    path: 'perfil-alumno/mis-cursos', 
    // canLoad: [ ValidarTokenGuard ],
    // canActivate: [ ValidarTokenGuard ,TieneTipoDeUsuarioGuard],
    // data: {
    //   tipoPermitido: ['Alumno']
    // },
    component: MisCursosComponent, 
  },
  { 
    path: 'perfil-docente/mis-cursos', 
    // canLoad: [ ValidarTokenGuard ],
    // canActivate: [ ValidarTokenGuard ,TieneTipoDeUsuarioGuard],
    // data: {
    //   tipoPermitido: ['Docente']
    // },
    component: MisCursosComponent, 
  },
  { 
    path: 'aula-virtual/:id', 
    component: AulaVirtualComponent, 
  },
  {
    path: 'perfil-docente',
    component: PerfilDocenteComponent, 
  },
  {
    path: 'docente/asignarespecialidad/:id',
    component: DocenteespecialidadComponent, 
  },
  {
    path: 'curso/asignardocente/:id',
    component: DocentecursoComponent, 
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component:ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
