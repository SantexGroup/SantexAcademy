import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PruebaComponent } from './component/prueba/prueba.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { from } from 'rxjs';

const routes: Routes = [ //defino las rutas

{ path: 'prueba', component: PruebaComponent },
{ path: '**', component: PageNotFoundComponent }, 

];

@NgModule({
   imports: [RouterModule.forRoot(routes, {useHash: true})],
   exports: [RouterModule]
})



export class AppRoutingModule { } 
