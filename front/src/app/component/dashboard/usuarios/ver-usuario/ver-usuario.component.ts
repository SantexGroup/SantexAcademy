import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { first, firstValueFrom } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/usuario.service'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.css']
})
export class VerUsuarioComponent implements OnInit {
  user!: User;

  constructor( public dialogRef: MatDialogRef<VerUsuarioComponent>, private userService: UserService,  private aRoute:ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: { id: number }) {}

  async ngOnInit() {
    this.user = await this.getUserById(this.data.id);
  
  }

  async getUserById(userId: number): Promise<User> {
    try {
      const dataUser = await this.userService.getUserById(userId);
      return dataUser;
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      throw new Error('Usuario no encontrado');
    }
  }
  close(){
    this.dialogRef.close(); 
  }

}
