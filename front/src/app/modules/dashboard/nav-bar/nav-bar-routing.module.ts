import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUpdateComponent } from '../form-update/form-update.component';
import { NavBarModule } from './nav-bar.module';
import { FormAddProductComponent } from '../form-add-product/form-add-product.component';
import { FormDeleteComponent } from '../form-delete/form-delete.component';

const routes: Routes = [
  {
    path: 'add-product',
    component: FormAddProductComponent
  },
  {
    path: 'form-update',
    component: FormUpdateComponent
  },
  {
    path: 'form-delete',
    component: FormDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class NavbarRoutingModule { }