import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './pages/create/create.component';
import { ShowComponent } from './pages/show/show.component';
import { IndexComponent } from './pages/index/index.component';
import { AdminComponent } from '../pages/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'index',
        component: AdminComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'edit/:id',
        component: CreateComponent
      },
      {
        path: 'show/:id',
        component: ShowComponent
      },
      {
        path: '**',
        redirectTo: 'index'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
