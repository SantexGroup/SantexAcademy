import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CVComponent } from './cv.component';
import { ProfilesFourComponent } from '../profiles-four/profiles-four.component';
import { ProfileOneComponent } from '../profile-one/profile-one.component';
import { ProfileTwoComponent } from '../profile-two/profile-two.component';

const routes: Routes = [
    {
        path: '',
        component: CVComponent
    },
    {
        path: 'fout',
        component: ProfilesFourComponent
    },
    {
      path: 'one',
      component: ProfileOneComponent
    },
    {
      path: 'two',
      component: ProfileTwoComponent
    }
]

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
  export class CvRoutingModule { }