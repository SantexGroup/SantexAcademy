import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//BORRAR si no se usa

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CarouselComponent } from 'src/app/modules/dashboard/carousel/carousel.component';
//import { LoginComponent } from '../login/login/login.component';
import { ToastrModule } from 'ngx-toastr/toastr/toastr.module';//BORRAR si no se usa

@NgModule({
  declarations: [
    DashboardPageComponent,
    CarouselComponent,
   //LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    //PagesModule //Importo el módulo de pages para hacer uso por ejemplo de quienessomoscomponent
  ],
  exports: [
    DashboardPageComponent,
    CarouselComponent //Exporto mis componentes por si quiero que se usen desde otro lado
  ],
  providers: [],
})
export class DashboardModule {}
