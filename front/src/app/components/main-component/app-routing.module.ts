import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRegistroComponent } from '../formulario-registro/formulario-registro.component';
import { LoginComponent } from '../login/login.component';
import { StudentsComponent } from '../students/students/students.component';
import { StudentsPersonalDataComponent } from '../students/students-personal-data/students-personal-data.component';
import { StudentsCoursesComponent } from '../students/students-courses/students-courses.component';
import { LayoutComponent } from '../students/layout/layout.component';
import { WelcomeStudentComponent } from '../students/welcome-student/welcome-student.component';



const routes: Routes = [
    { path: 'students', component: LayoutComponent, children: [
      { path: '', component: WelcomeStudentComponent },
      { path: 'user-dashboard', component: StudentsComponent },
      { path: 'student-courses', component: StudentsCoursesComponent },
      { path: 'student-personalData', component: StudentsPersonalDataComponent },
    ]},
    { path: 'registro', component: FormularioRegistroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: '**', redirectTo: 'dashboard' },
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
