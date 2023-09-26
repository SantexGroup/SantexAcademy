import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ExperiencesComponent } from '../crud-data/experiences/experiences.component';
import { FormationsComponent } from '../crud-data/formations/formations.component';
import { OptionalsComponent } from '../crud-data/optionals/optionals.component';
import { LanguageComponent } from '../crud-data/language/language.component';
import { SkillComponent } from '../crud-data/skill/skill.component';
import { PersonalComponent } from '../crud-data/personal/personal.component';
import { ReferencesComponent } from '../crud-data/references/references.component';
import { CVComponent } from '../cv/cv.component';
import { ProfilesComponent } from '../profiles/profiles.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ProfilesFourComponent } from '../profiles-four/profiles-four.component';
import { AbandonGuard } from 'src/app/core/guards/abandon.guard';



const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'personal',
    component: PersonalComponent,
    canDeactivate: [AbandonGuard]
    
  },
  {
    path: 'cv',
    component: CVComponent,
    children:[
      {
        path: 'four',
        component: ProfilesFourComponent
      }
    ]
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
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule { }
