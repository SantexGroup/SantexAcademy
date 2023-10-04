import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassResetComponent } from './components/pass-reset/pass-reset.component';
import { ConfirmResetComponent } from './components/confirm-reset/confirm-reset.component';

const routes: Routes = [
  {
    path: '',
    component: PassResetComponent,
    children: [

    ]
  },
  {
    path: 'confirm',
    component: ConfirmResetComponent,
    children: [

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassResetRoutingModule { }
