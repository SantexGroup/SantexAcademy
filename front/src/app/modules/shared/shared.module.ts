import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { NavbarComponent } from './navbar/navbar.component';
import { PetAgePipe } from './pipes/pet-age.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    PetAgePipe
  ],
  imports: [
    CommonModule, 
    RouterModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    PetAgePipe
  ],
})
export class SharedModule {}
