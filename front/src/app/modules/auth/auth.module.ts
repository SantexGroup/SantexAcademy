import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './pages/login/login.component';
import { VolunteerRegisterComponent } from './pages/volunteer-register/volunteer-register.component';
import { OptionsRegisterComponent } from './pages/options-register/options-register.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { CardOptionregisterComponent } from './components/card-optionregister/card-optionregister.component';
import { FormVolunteerregisterComponent } from './components/form-volunteerregister/form-volunteerregister.component';
import { RouterModule, Routes } from '@angular/router';
import { FormCoordinatorsRegisterComponent } from './components/form-coordinators-register/form-coordinators-register.component';
import { CoordinatorRegisterComponent } from './pages/coordinator-register/coordinator-register.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalStatusFormComponent } from './components/modal-status-form/modal-status-form.component';
import { ModalOptionsLoginComponent } from './components/modal-options-login/modal-options-login.component';

const routes: Routes = [
  {
    path: 'login',
    title: 'VolunTime - Iniciar sesión',
    component: LoginComponent,
  },
  {
    path: 'options-register',
    title: 'VolunTime - Opciones de registro',
    component: OptionsRegisterComponent,
  },

  {
    path: 'volunteer-register',
    title: 'VolunTime - Registro de voluntarios',
    component: VolunteerRegisterComponent,
  },
  {
    path: 'coordinator-register',
    title: 'VolunTime - Registro de coordinadores',
    component: CoordinatorRegisterComponent,
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    VolunteerRegisterComponent,
    OptionsRegisterComponent,
    FormLoginComponent,
    CardOptionregisterComponent,
    FormVolunteerregisterComponent,
    FormCoordinatorsRegisterComponent,
    CoordinatorRegisterComponent,
    ModalStatusFormComponent,
    ModalOptionsLoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class authModule {}
