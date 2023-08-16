import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './modules/dashboard-admin/dashboard-admin.component';
import { HeaderAdminComponent } from './modules/header-admin/header-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    HeaderAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
