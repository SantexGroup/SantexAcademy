import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerRegistrationComponent } from './component/buyer-registration/buyer-registration.component';



const routes: Routes = [
 
  { 
    path: '', 
    redirectTo: '/comprador',
    pathMatch: 'full'
  },
  { 
    path: 'comprador',
    component: BuyerRegistrationComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
