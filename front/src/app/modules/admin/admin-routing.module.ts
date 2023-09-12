import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  {path:'',component:AdminComponent,children:[
          {path:'tareas', component:TareasComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
