import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DashboardModule } from '../dashboard/dashboard.module';
import { DogRoutingModule } from './dog-routing.module';

import { NewDogPageComponent } from './new-dog-page/new-dog-page.component';

@NgModule({
  declarations: [NewDogPageComponent],
  imports: [
    CommonModule,
    DogRoutingModule,
    ReactiveFormsModule,
    DashboardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    DatePipe
  ],
})
export class DogModule {}
