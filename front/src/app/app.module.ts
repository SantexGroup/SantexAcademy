import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './modules/dashboard-admin/dashboard-admin.component';
import { HeaderDashboardComponent } from './modules/header-dashboard/header-dashboard.component';
import { LogoutModalComponent } from './modules/logout-modal/logout-modal.component';

import { InputLoginComponent } from './modules/input-login/input-login.component';
import { ReactiveFormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    HeaderDashboardComponent,
    LogoutModalComponent,
    InputLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
