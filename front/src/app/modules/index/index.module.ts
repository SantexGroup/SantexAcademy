import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexPageComponent } from './index-page/index-page.component';
import { RegistroVoluntariosComponent } from './registro-voluntarios/registro-voluntarios.component';
import { RegistroOrganizacionComponent } from './registro-organizacion/registro-organizacion.component';
import { LoginComponent } from './login/login.component';
import { CoreModule } from 'src/app/core/core.module';
import { IndexComponent } from './index.component';


@NgModule({
  declarations: [
    IndexPageComponent,
    RegistroVoluntariosComponent,
    RegistroOrganizacionComponent,
    LoginComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    CoreModule
  ]
})
export class IndexModule { }
