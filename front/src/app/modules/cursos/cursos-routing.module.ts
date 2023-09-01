import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCursosComponent } from './pages/all-cursos/all-cursos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'index',
        component: AllCursosComponent
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
