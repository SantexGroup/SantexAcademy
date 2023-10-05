import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { StudentsCoursesComponent } from './students-courses/students-courses.component';
import { StudentsPersonalDataComponent } from './students-personal-data/students-personal-data.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { StudentsRoutingModule } from './students-routing.module';
import { LayoutComponent } from './layout/layout.component';





@NgModule({
  declarations: [
    
  
    StudentsComponent,
            StudentsCoursesComponent,
            StudentsPersonalDataComponent,
            LayoutComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    StudentsRoutingModule,
  ]
})
export class StudentModule { }
