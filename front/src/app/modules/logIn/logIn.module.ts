import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [LoginPageComponent, FormComponent],
  imports: [CommonModule],
})
export class logInModule {}
