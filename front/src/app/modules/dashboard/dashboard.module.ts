import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RegisterbuttonComponent } from '../register/registerbutton/registerbutton.component';
import { RegisterformComponent } from '../register/registerform/registerform.component';
import { HeaderComponent } from '../share/header/header.component';
import { NavComponent } from '../share/nav/nav.component';
import { FooterComponent } from '../share/footer/footer.component';
import { CarouselComponent } from 'src/app/modules/dashboard/carousel/carousel.component';
import { RegisteranswerComponent } from '../register/registeranswer/registeranswer.component';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [
    DashboardPageComponent,
    RegisterbuttonComponent,
    RegisterformComponent,
    RegisteranswerComponent,
    CarouselComponent
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
