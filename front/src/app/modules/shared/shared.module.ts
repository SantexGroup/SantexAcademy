import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchCoursesComponent } from './components/search-courses/search-courses.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SearchCoursesComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    SearchCoursesComponent,
  ]
})
export class SharedModule { }
