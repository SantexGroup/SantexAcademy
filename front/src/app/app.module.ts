import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './modules/admin-panel/admin-panel.component';
import { EditCourseComponent } from './modules/admin-panel/edit-course/edit-course.component';
import { AddCourseComponent } from './modules/admin-panel/add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    EditCourseComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
