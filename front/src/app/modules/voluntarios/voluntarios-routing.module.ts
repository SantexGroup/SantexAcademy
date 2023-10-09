import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoluntariosComponent } from './voluntarios.component';
import { DashboardVoluntarioComponent } from './dashboard-voluntario/dashboard-voluntario.component';
import { PremiosVoluntarioComponent } from './premios-voluntario/premios-voluntario.component';
import { TareasVoluntarioComponent } from './tareas-voluntario/tareas-voluntario.component';
import { DatosVoluntarioComponent } from './datos-voluntario/datos-voluntario.component';

const routes: Routes = [
  {
    path:'',
    component:VoluntariosComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardVoluntarioComponent
      },
      {
        path:'premios',
        component:PremiosVoluntarioComponent
      },
      {
        path:'tareas',
        component:TareasVoluntarioComponent
      },
      {
        path:'datos',
        component:DatosVoluntarioComponent
      }
    ]
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoluntariosRoutingModule { }
