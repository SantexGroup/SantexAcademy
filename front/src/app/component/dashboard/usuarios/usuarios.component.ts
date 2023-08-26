import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: User[]= [];

  displayedColumns: string[] = [ "firstName", "lastName", "username", "email", "phone", "rol", "acciones"];
  
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private userService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarUsuarios(); 
  }

  async cargarUsuarios() {
    this.listUsuarios = [];
    const token = localStorage.getItem('token');
    if (token !== null) {
      try {
        this.listUsuarios = await this.userService.getUsers(token);
        this.dataSource = new MatTableDataSource(this.listUsuarios);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      } 
      } else {
        this._snackBar.open('Debe iniciar sesión con rol Admin para acceder a la lista de usuarios', '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async deleteUser(id: number) {
    const token = localStorage.getItem('token');
    console.log(id);
    if (!token) {
      this._snackBar.open(
        'Debe iniciar sesión con rol Admin para acceder a la lista de usuarios',
        '',
        {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        }
      );
      return; // Salir de la función si no hay token
    }
  
    try {
      await this.userService.deleteUser({ userId: id, token });
      this.cargarUsuarios();
      this._snackBar.open('Usuario eliminado con éxito.', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    } catch (error) {
      this._snackBar.open(
        'Ocurrió un error al eliminar el usuario. Por favor, inténtalo nuevamente.',
        '',
        {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        }
      );
    }
  }
  
}
