import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './components/edit-user/edit-user.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserComponent,
    AddUserComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule, 
    FormsModule    
  ]
})
export class UserModule { }
