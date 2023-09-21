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
import { PersonalComponent } from './modules/crud-data/personal/personal.component';
import { CVComponent } from './modules/cv/cv.component';
import { ReferencesComponent } from './modules/crud-data/references/references.component';
import { ProfilesComponent } from './modules/profiles/profiles.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProfilesFourComponent } from './modules/profiles-four/profiles-four.component';

const routes: Routes = [
  {
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
    canActivate: [AuthGuard],
    children: [
      {
        path: 'personal',
        component: PersonalComponent
      },
      {
        path: 'cv',
        component: CVComponent,
        children: [
          {
            path: 'four',
            component: ProfilesFourComponent
          }
        ]
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
        component: FormationsComponent,
        canDeactivate: [(component: FormationsComponent) => component.canExit()],
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
      },
      {
        path: 'profiles',
        component: ProfilesComponent
      },
      {
        path: 'four',
        component: ProfilesFourComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
