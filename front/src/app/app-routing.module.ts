import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputContraseniaComponent } from './modules/input-contrasenia/input-contrasenia.component';

const routes: Routes = [
  { path: '', redirectTo: '/Contrasenia', pathMatch: 'full' },
  { path: 'Contrasenia', component: InputContraseniaComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

