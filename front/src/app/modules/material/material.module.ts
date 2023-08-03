import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

const MATERIALCOMPONENTS = [
  MatButtonModule,
]

@NgModule({
  imports: [MATERIALCOMPONENTS],
  exports: [MATERIALCOMPONENTS]
})
export class MaterialModule { }
