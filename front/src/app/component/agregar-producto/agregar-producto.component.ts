import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarProductoModalComponent } from '../agregar-producto-modal/agregar-producto-modal.component';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {

  constructor(private dialog: MatDialog) {}

  abrirModal(): void {
    const dialogRef = this.dialog.open(AgregarProductoModalComponent, {
      width: '500px', // Tamaño del modal
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró');
    });
  }
}
