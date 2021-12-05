import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { NavbarComponent } from './navbar/navbar.component';
import { PetAgePipe } from './pipes/pet-age.pipe';
import { PetDangerousPipe } from './pipes/pet-dangerous.pipe';
import { PetGenderPipe } from './pipes/pet-gender.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    PetAgePipe,
    PetDangerousPipe,
    PetGenderPipe,
  ],
  imports: [
    CommonModule, 
    RouterModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    ReactiveFormsModule,
    NavbarComponent,
    PetAgePipe,
    PetDangerousPipe,
    PetGenderPipe
  ],
})
export class SharedModule {}
