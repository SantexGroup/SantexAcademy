import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RegisterComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RegisterRoutingModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [],
})
export class RegisterModule {}
