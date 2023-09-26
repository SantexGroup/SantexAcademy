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
import { AbandonGuard } from './core/guards/abandon.guard';

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
        path: 'personal',
        component: PersonalComponent,
        canDeactivate: [AbandonGuard]
      },
      {
        path: 'experiencias',
        component: ExperiencesComponent,
        canDeactivate: [AbandonGuard]
      },
      {
        path: 'referencias',
        component: ReferencesComponent,
        canDeactivate: [AbandonGuard]
      },
      {
        path: 'formaciones',
        component: FormationsComponent,
        canDeactivate: [AbandonGuard]
      },
      {
        path: 'opcionales',
        component: OptionalsComponent,
        canDeactivate: [AbandonGuard]
      },
      {
        path: 'lenguajes',
        component: LanguageComponent,
        canDeactivate: [AbandonGuard]
      },
      {
        path: 'habilidades',
        component: SkillComponent,
        canDeactivate: [AbandonGuard]
      },
      {
        path: 'profiles',
        component: ProfilesComponent
      }
    ]
  }, 
  {
    path: 'registro',
    component: RegistroComponent,
    canDeactivate: [AbandonGuard]
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
