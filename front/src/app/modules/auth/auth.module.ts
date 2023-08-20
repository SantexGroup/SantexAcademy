import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { VolunteerRegisterComponent } from './pages/volunteer-register/volunteer-register.component';
import { OptionsRegisterComponent } from './pages/options-register/options-register.component';

@NgModule({
  declarations: [
    LoginComponent,
    VolunteerRegisterComponent,
    OptionsRegisterComponent,
  ],
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class authModule {}
