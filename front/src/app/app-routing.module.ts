import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { NoAuthGuard } from './guards/no-auth/no-auth.guard';
import { AdminGuard } from './guards/admin/admin.guard';
import { StudentGuard } from './guards/student/student.guard';
import { TeacherGuard } from './guards/teacher/teacher.guard';


/**
 * /          es para cualquiera sin loguear
 * /home      es para los que esten logueados
 * /login     para loguearse
 * /register  para registrarse
 * /user      para que el user vea sus datos
 * /news      noticias para algo... para otro sprint
 * /contact   formulario de contacto y datos de contacto de la academia
 * /dashboard para que el admin vea dashboard (aca hay que ver si estan los endpoints de TODO para mostrar en tiempo real cosas como cantidad de: alumnos, cursos, profes, "precios", "ganancias?")
 * redirect   supongo que angular tendra algo para si esta logeado mande a "/home", y si no esta logueado mande a "/"
 
 */


const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule), canActivate: [NoAuthGuard] },
  { path: 'pass-reset', loadChildren: () => import('./modules/pass-reset/pass-reset.module').then(m => m.PassResetModule), canActivate: [NoAuthGuard] },
  { path: 'register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule), canActivate: [NoAuthGuard] },
  { path: 'news', loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule) },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule), canActivate: [AuthGuard, AdminGuard] },
  { path: 'student', loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule), canActivate: [AuthGuard, StudentGuard] },
  { path: 'teacher', loadChildren: () => import('./modules/teachers/teachers.module').then(m => m.TeachersModule), canActivate: [AuthGuard, TeacherGuard] },
  { path: 'course', loadChildren: () => import('./modules/course/course.module').then(m => m.CourseModule), canActivate: [AuthGuard, AdminGuard] },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },


  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }