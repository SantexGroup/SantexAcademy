import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './component/navbar/navbar.component';
import { PruebaComponent } from './component/prueba/prueba.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { BuyerRegistrationComponent } from './component/buyer-registration/buyer-registration.component';
import { from } from 'rxjs';
import { PantallaComponent } from './component/pantalla/pantalla.component';
import { AgregarProductoModalComponent } from './component/agregar-producto-modal/agregar-producto-modal.component';
import { FormLoginComponent } from './component/form-login/form-login.component';

const routes: Routes = [ //defino las rutas

{ path: 'prueba', component: PantallaComponent },
{ path: 'registro', component: BuyerRegistrationComponent },
{ path: 'agregar-producto-module', component: AgregarProductoModalComponent  },
{ path: '**', component: PageNotFoundComponent }, 
{ path: '',   redirectTo: '/comprador', pathMatch: 'full'},
{ path: 'comprador', component: BuyerRegistrationComponent},
  
];

@NgModule({
   imports: [RouterModule.forRoot(routes, {useHash: true})],
   exports: [RouterModule]
})



export class AppRoutingModule { } 
