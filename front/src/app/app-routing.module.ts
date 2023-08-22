import { NgModule } from '@angular/core';
import { InputLoginComponent } from './modules/input-login/input-login.component';
import { RouterModule, Routes } from  '@angular/router'; 

const routes: Routes=[  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: InputLoginComponent },
  //ingresar  componente passwd.
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
