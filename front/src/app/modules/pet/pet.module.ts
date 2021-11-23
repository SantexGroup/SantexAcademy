import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PetRoutingModule } from './pet-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { PetService } from 'src/app/core/services/pet/pet.service';

import { PetListPageComponent } from './pet-list-page/pet-list-page.component';
import { PetRegisterPageComponent } from './pet-register-page/pet-register-page.component';


@NgModule({
  declarations: [PetListPageComponent, PetRegisterPageComponent, ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PetRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers: [PetService],

})
export class PetModule { }
