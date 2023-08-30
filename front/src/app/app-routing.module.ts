import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerRegistrationComponent } from './buyer-registration/buyer-registration.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';


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
  { 
    path: 'vendedor', 
  component: SellerRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
