import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserComponent 
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,     
  ]
})
export class UserModule { }
