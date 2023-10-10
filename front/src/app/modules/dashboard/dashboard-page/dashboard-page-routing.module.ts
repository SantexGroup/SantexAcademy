import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUpdateComponent } from '../form-update/form-update.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FormAddProductComponent } from '../form-add-product/form-add-product.component';
import { FormDeleteComponent } from '../form-delete/form-delete.component';
import { HomeComponent } from '../home/home.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { VistaProveedoresComponent } from '../vista-proveedores/vista-proveedores.component';
import { SearchProductComponent } from '../search-product/search-product.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginComponent } from '../login/login.component';
import { VistaUsuarioPerfilComponent } from '../vista-usuario-perfil/vista-usuario-perfil.component';
import { RegisterUsersComponent } from '../register-users/register-users.component';
import { VistaHomeVendedorComponent } from '../vista-home-vendedor/vista-home-vendedor.component';
import { AuthGuard } from '../../../core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'form-update/:id',
        component: FormUpdateComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'form-add-product',
        component: FormAddProductComponent, 
        canActivate: [AuthGuard]
      },
      {
        path: 'search-product',
        component: SearchProductComponent
      },
      {
        path: 'form-delete',
        component: FormDeleteComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'perfil-Users',
        component: VistaUsuarioPerfilComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'register',
        component: RegisterUsersComponent
        
      },
      {
        path:'home-vendedor',
        component: VistaHomeVendedorComponent,
        canActivate: [AuthGuard]
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardPageRoutingModule { }