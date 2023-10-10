import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AgregarProductoModalComponent } from '../agregar-producto-modal/agregar-producto-modal.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu:any 
  constructor(private dialog: MatDialog) {
    this.menu=""
   }

  ngOnInit(): void {
  }
  abrirModal(): void {
    const dialogRef = this.dialog.open(AgregarProductoModalComponent, {
      width: '500px', // Tamaño del modal
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró');
    });
  }
}
