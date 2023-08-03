import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }
