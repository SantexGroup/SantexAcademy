import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateComponent } from './pages/create/create.component';
import { ShowComponent } from './pages/show/show.component';
import { IndexComponent } from './pages/index/index.component';
import { UsersRoutingModule } from './users-routing.module';
import { PagesModule } from '../pages/pages.module';


@NgModule({
  declarations: [
    CreateComponent,
    ShowComponent,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
