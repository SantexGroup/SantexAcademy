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
import { ProfileOneComponent } from '../profile-one/profile-one.component';
import { ProfileTwoComponent } from '../profile-two/profile-two.component';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => 
    import('../lazyLoading/crud-data.module')
    .then(m => m.CrudDataModule)
  },
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