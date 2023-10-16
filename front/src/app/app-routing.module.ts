import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MailComponent } from './modules/usuario/mail/mail.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: '#nosotrosContacto',
    component: AppComponent
  },
  {
    path: 'mail',
    component: MailComponent
  },
  {
    path: 'home/:id',
    loadChildren: () => 
    import('./modules/lazyLoading/crud-data.module')
    .then(m => m.CrudDataModule)
  }, 
  {
    path: '',
    loadChildren: () => 
    import('./modules/lazyLoading/usuario.module')
    .then(m => m.UsuarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }