import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCursosComponent } from './pages/all-cursos/all-cursos.component';
import { CreateCursoComponent } from './pages/create-curso/create-curso.component';
import { GetCursoComponent } from './pages/get-curso/get-curso.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'index',
        component: AllCursosComponent
      },
      {
        path: 'create',
        component: CreateCursoComponent
      },
      {
        path: 'edit/:id',
        component: CreateCursoComponent
      },
      {
        path: 'show/:id',
        component: GetCursoComponent
      },
      {
        path: '**',
        redirectTo: 'index'
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class CursosRoutingModule { }
