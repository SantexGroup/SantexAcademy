import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './modules/admin-panel/admin-panel.component';
import { EditCourseComponent } from './modules/admin-panel/edit-course/edit-course.component';
import { AddCourseComponent } from './modules/admin-panel/add-course/add-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    EditCourseComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [DatePipe],

  bootstrap: [AppComponent]
})
export class AppModule { }
