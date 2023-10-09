import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { CVComponent } from '../cv/cv.component';
import { ProfilesFourComponent } from '../profiles-four/profiles-four.component';
import { PersonalComponent } from '../crud-data/personal/personal.component';
import { ExperiencesComponent } from '../crud-data/experiences/experiences.component';
import { ReferencesComponent } from '../crud-data/references/references.component';
import { AbandonGuard } from 'src/app/core/guards/abandon.guard';
import { FormationsComponent } from '../crud-data/formations/formations.component';
import { LanguageComponent } from '../crud-data/language/language.component';
import { OptionalsComponent } from '../crud-data/optionals/optionals.component';
import { SkillComponent } from '../crud-data/skill/skill.component';
import { ProfilesComponent } from '../profiles/profiles.component';
import { ProfileOneComponent } from '../profile-one/profile-one.component';
import { ProfileTwoComponent } from '../profile-two/profile-two.component';
import { ProfileThreeComponent } from '../profile-three/profile-three.component';


const crudRoutes: Routes = [
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
          },
          {
            path: 'one',
            component: ProfileOneComponent
          },
          {
            path: 'two',
            component: ProfileTwoComponent
          },
          {
            path: 'three',
            component: ProfileThreeComponent
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
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(crudRoutes)
  ]
})
export class CrudDataModule { }
