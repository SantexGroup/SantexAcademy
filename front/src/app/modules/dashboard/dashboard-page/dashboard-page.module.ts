import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { AuthGuard } from 'src/app/core/guards/auth.guard';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DashboardPageRoutingModule
  ],
  exports: [
    
  ],
  providers:[
    AuthGuard
  ]
})
export class DashboardPageModule { }
