import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CarouselComponent } from 'src/app/modules/dashboard/carousel/carousel.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    //PagesModule //Importo el módulo de pages para hacer uso por ejemplo de quienessomoscomponent
  ],
  exports: [
    DashboardPageComponent,
    CarouselComponent //Exporto mis componentes por si quiero que se usen desde otro lado
  ],
  providers: [],
})
export class DashboardModule {}
