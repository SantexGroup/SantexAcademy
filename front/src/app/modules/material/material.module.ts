import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos exportados de Angular Material
import {  MatButtonModule } from '@angular/material/button';
import {  MatInputModule  } from '@angular/material/input';
import {  MatCardModule } from '@angular/material/card';
import {  MatProgressSpinnerModule  } from '@angular/material/progress-spinner';
import {  MatFormFieldModule  } from '@angular/material/form-field'; 
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class MaterialModule { }
