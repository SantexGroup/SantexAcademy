import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './pages/create/create.component';
import { ShowComponent } from './pages/show/show.component';
import { IndexComponent } from './pages/index/index.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstadoUsuarioDirective } from 'src/app/directivas/estado-usuario.directive';



@NgModule({
  declarations: [
    CreateComponent,
    ShowComponent,
    IndexComponent,
    EstadoUsuarioDirective
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
