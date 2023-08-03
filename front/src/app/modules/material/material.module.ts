import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIALCOMPONENTS = [
  MatButtonModule,
  MatToolbarModule,
]

@NgModule({
  imports: [MATERIALCOMPONENTS],
  exports: [MATERIALCOMPONENTS]
})
export class MaterialModule { }
