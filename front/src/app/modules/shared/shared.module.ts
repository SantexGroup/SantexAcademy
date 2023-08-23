import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchCoursesComponent } from './components/search-courses/search-courses.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SearchCoursesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
