import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { OptionsRegisterComponent } from './components/options-register/options-register.component';

@NgModule({
  declarations: [LoginPageComponent, FormLoginComponent, OptionsRegisterComponent],
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class authModule {}
