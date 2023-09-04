import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './modules/usuario/registro/registro.component';
import { LoginComponent } from './modules/usuario/login/login.component';
import { FormationsComponent } from './modules/crud-data/formations/formations.component';
import { OptionalsComponent } from './modules/crud-data/optionals/optionals.component';
import { HomeComponent } from './modules/home/home.component';
import { LanguageComponent } from './modules/crud-data/language/language.component';
import { AppComponent } from './app.component';
import { ExperiencesComponent } from './modules/crud-data/experiences/experiences.component';
import { PersonalComponent } from './modules/crud-data/personal/personal.component';

const routes: Routes = [
  // TODO: DESCOMENTAR ANTES DE SUBIR Y CONFIGURAR DIRECCIONAMIENTO
/* */  {
    path: '',
    component: AppComponent
  }, 
  /* */{
    path: 'home/:id',
    component: HomeComponent,
    children: [
      {
        path: 'personal',
        component: PersonalComponent
      },
      {
        path: 'experiencias',
        component: ExperiencesComponent
      },
      {
        path: 'formaciones',
        component: FormationsComponent
      },
      {
        path: 'opcionales',
        component: OptionalsComponent
      },
      {
        path: 'lenguajes',
        component: LanguageComponent
      }
    ]
  }, 
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // TODO: ELIMINAR ANTE DE SUBIR
/*   {
    path: 'personal',
    component: PersonalComponent
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
