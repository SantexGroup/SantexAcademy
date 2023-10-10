import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { FormAddProductComponent } from './form-add-product/form-add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUpdateComponent } from './form-update/form-update.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormDeleteComponent } from './form-delete/form-delete.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MatSelectModule } from '@angular/material/select';
import { PopUpHomeComponent } from './pop-up-home/pop-up-home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { VistaProveedoresComponent } from './vista-proveedores/vista-proveedores.component';
import { MatChipsModule } from '@angular/material/chips';
import { SearchProductComponent } from './search-product/search-product.component';
import { ProductCardComponent } from './search-product/product-card/product-card.component';
import { MatBadgeModule } from '@angular/material/badge';
import { CardComponent } from './shopping-cart/card/card.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { VistaUsuarioPerfilComponent } from './vista-usuario-perfil/vista-usuario-perfil.component';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { VistaHomeVendedorComponent } from './vista-home-vendedor/vista-home-vendedor.component';



@NgModule({
  declarations: [DashboardPageComponent, FormAddProductComponent, FormUpdateComponent, NavBarComponent,
  FormDeleteComponent, HomeComponent, PopUpHomeComponent, ShoppingCartComponent,
  SearchProductComponent, ProductCardComponent, VistaProveedoresComponent,FooterComponent, 
  LoginComponent, CardComponent,VistaUsuarioPerfilComponent, VistaHomeVendedorComponent, RegisterUsersComponent],




  imports: [
    CommonModule,
    MatChipsModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatBadgeModule
  ],
  exports: [DashboardPageComponent],
  providers: [],
})
export class DashboardModule {}
