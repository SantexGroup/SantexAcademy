import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { PetRoutingModule } from './pet-routing.module';
import { PetService } from 'src/app/core/services/pet/pet.service';

import { PetListPageComponent } from './pet-list-page/pet-list-page.component';


@NgModule({
  declarations: [PetListPageComponent],
  imports: [
    CommonModule,
    PetRoutingModule,
    MaterialModule
  ],
  providers: [PetService],

})
export class PetModule { }
