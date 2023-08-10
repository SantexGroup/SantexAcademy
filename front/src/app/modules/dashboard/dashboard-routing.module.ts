import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { BarraComponent } from 'src/app/barra/barra.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [ 
      
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
