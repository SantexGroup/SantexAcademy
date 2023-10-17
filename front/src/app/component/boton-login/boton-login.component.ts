import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormLoginComponent } from '../form-login/form-login.component';


@Component({
  selector: 'app-boton-login',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatIconModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './boton-login.component.html',
  styleUrls: ['./boton-login.component.css']
})
export class BotonLoginComponent implements OnInit {

  constructor(private Dialog:MatDialog) {}
    openModal(){
      this.Dialog.open(FormLoginComponent,{
        width:'400px',
        height:'300px'
      })
  }

  ngOnInit(): void {
  }


}
