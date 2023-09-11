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
import { SkillComponent } from './modules/crud-data/skill/skill.component';
<<<<<<< HEAD
import { PersonalComponent } from './modules/crud-data/personal/personal.component';
=======
import { ReferencesComponent } from './modules/crud-data/references/references.component';
>>>>>>> main

const routes: Routes = [
  // TODO: DESCOMENTAR ANTES DE SUBIR Y CONFIGURAR DIRECCIONAMIENTO
/* */  {
    path: '',
    component: AppComponent
  },
  {
    path: '#nosotrosContacto',
    component: AppComponent
  },
  {
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
        path: 'referencias',
        component: ReferencesComponent
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
      },
      {
        path: 'habilidades',
        component: SkillComponent
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
