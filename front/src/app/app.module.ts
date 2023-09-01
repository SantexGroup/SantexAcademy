import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './modules/dashboard-admin/dashboard-admin.component';
import { HeaderDashboardComponent } from './modules/header-dashboard/header-dashboard.component';
import { LogoutModalComponent } from './modules/logout-modal/logout-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    HeaderDashboardComponent,
    LogoutModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
