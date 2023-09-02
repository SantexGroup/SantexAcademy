import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './modules/share/error-page/error-page.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { EstadoUsuarioDirective } from './directivas/estado-usuario.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from './modules/pages/pages.module';
import { ShareModule } from './modules/share/shares.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    PagesModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
