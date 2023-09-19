import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CVComponent } from './cv.component';
import { ProfilesFourComponent } from '../profiles-four/profiles-four.component';

const routes: Routes = [
    {
        path: '',
        component: CVComponent
    },
    {
        path: 'fout',
        component: ProfilesFourComponent
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