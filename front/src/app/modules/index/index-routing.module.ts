import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';
import { RegistroVoluntariosComponent } from './registro-voluntarios/registro-voluntarios.component';
import { RegistroOrganizacionComponent } from './registro-organizacion/registro-organizacion.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index.component';

const routes: Routes = [
  {path:'',component:IndexComponent, children:[
    {path:'', component:IndexPageComponent},
    {path:'registro-voluntario',component:RegistroVoluntariosComponent},
    {path:'registro-organizacion',component:RegistroOrganizacionComponent},
    {path:'login', component:LoginComponent}
    
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
