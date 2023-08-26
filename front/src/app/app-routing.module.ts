import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CrearUsuarioComponent } from './component/dashboard/usuarios/crear-usuario/crear-usuario.component';
import { UsuariosComponent } from './component/dashboard/usuarios/usuarios.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"dashboard", loadChildren:()=>import("./component/dashboard/dashboard.module").then(x => x.DashboardModule)},
  {path: "create-user", component: CrearUsuarioComponent },
  {path: "list-users", component: UsuariosComponent},
  {path:"**",redirectTo:"login", pathMatch:"full"},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
