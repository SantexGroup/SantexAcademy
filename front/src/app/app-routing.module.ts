import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraComponent } from './barra/barra.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BasesComponent } from './bases/bases.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: '',
    component: HomePageComponent
  }, 
  {
  path: 'bases',
  component: BasesComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
