import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mensaje-error',
  templateUrl: './mensaje-error.component.html',
})
export class MensajeErrorComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MensajeErrorComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
