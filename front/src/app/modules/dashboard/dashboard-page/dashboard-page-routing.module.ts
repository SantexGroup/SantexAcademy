import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUpdateComponent } from '../form-update/form-update.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FormAddProductComponent } from '../form-add-product/form-add-product.component';

const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [
      {
        path: 'form-add-product',
        component: FormAddProductComponent
      },
      {
        path: 'form-update',
        component: FormUpdateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardPageRoutingModule { }